(() => {
    window.createTargetRenderer = function createTargetRenderer() {
        const GRID_SIZE = 15;
        const CENTER = Math.floor(GRID_SIZE / 2);
        const cells = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
        const blocked = new Set();
        const SAMPLE_OBSTACLE_LAYOUT = [
            [-2, 0],
            [2, 0],
            [0, -2],
            [0, 2],
            [-1, -1],
            [1, 1],
            [-1, 2],
            [1, -2],
        ];
        const coordKey = (row, col) => `${row},${col}`;
        const VARIABLE_SLIDER_MIN = 0;
        const VARIABLE_SLIDER_MAX = 10;
        const VARIABLE_SLIDER_DEFAULT = 0;
        const variableState = {
            values: new Map([
                ['size', 1]
            ]),
            canonical: new Map([
                ['size', 'size']
            ]),
            required: new Set()
        };
        let gridEl;
        let summaryEl;
        let errorEl;
        let warningEl;
        let rawCodeEl;
        let legendRangeEl;
        let legendSplashEl;
        let variableControlsEl;
        let obstacleHintEl;
        let addObstaclesBtn;
        let clearObstaclesBtn;
        let controlsBound = false;
        let initialized = false;
        let activeScenario = null;
        let lastRawText = '';
        let lastRenderOptions = { isDashAttack: false, extraWarning: '' };

        const helpers = {
            center: CENTER,
            size: GRID_SIZE,
            withinBounds(row, col) {
                return row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE;
            },
            allGridCells() {
                const cells = [];
                for (let row = 0; row < GRID_SIZE; row++) {
                    for (let col = 0; col < GRID_SIZE; col++) {
                        cells.push([row, col]);
                    }
                }
                return cells;
            },
            isBlocked(row, col) {
                return blocked.has(coordKey(row, col));
            },
            linePath(row, col) {
                if (row === CENTER && col === CENTER) {
                    return [];
                }
                return traceLineCells(CENTER, CENTER, row, col);
            },
            pathClearBetween(startRow, startCol, endRow, endCol, allowEndBlocked = true) {
                const path = traceLineCells(startRow, startCol, endRow, endCol);
                if (!path.length) {
                    return true;
                }
                for (let i = 0; i < path.length; i++) {
                    const [r, c] = path[i];
                    if (!cellIntersectsSegment(r, c, startRow, startCol, endRow, endCol)) {
                        continue;
                    }
                    if (allowEndBlocked && r === endRow && c === endCol) {
                        continue;
                    }
                    if (this.isBlocked(r, c)) {
                        return false;
                    }
                }
                return true;
            },
            pathClear(row, col) {
                return this.pathClearBetween(CENTER, CENTER, row, col, true);
            },
            cellsWithinRadius(row, col, maxRadius, minRadius = 0) {
                const normalizedMax = Math.max(0, Math.floor(Number(maxRadius) || 0));
                const normalizedMin = Math.max(0, Math.min(normalizedMax, Math.floor(Number(minRadius) || 0)));
                if (normalizedMax === 0 && normalizedMin > 0) {
                    return [];
                }
                const affected = [];
                for (let r = 0; r < GRID_SIZE; r++) {
                    for (let c = 0; c < GRID_SIZE; c++) {
                        const distance = Math.abs(r - row) + Math.abs(c - col);
                        if (distance >= normalizedMin && distance <= normalizedMax) {
                            affected.push([r, c]);
                        }
                    }
                }
                return affected;
            }
        };

        function traceLineCells(startRow, startCol, endRow, endCol) {
            const cells = [];
            const seen = new Set();
            const record = (row, col) => {
                if (row === startRow && col === startCol) {
                    return;
                }
                const key = `${row},${col}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    cells.push([row, col]);
                }
            };

            let x0 = startCol;
            let y0 = startRow;
            const x1 = endCol;
            const y1 = endRow;
            const dx = Math.abs(x1 - x0);
            const dy = Math.abs(y1 - y0);
            const sx = x0 < x1 ? 1 : -1;
            const sy = y0 < y1 ? 1 : -1;
            let err = dx - dy;

            while (x0 !== x1 || y0 !== y1) {
                const e2 = err * 2;
                if (e2 > -dy) {
                    err -= dy;
                    x0 += sx;
                }
                if (e2 < dx) {
                    err += dx;
                    y0 += sy;
                }
                record(y0, x0);

                if (e2 > -dy && e2 < dx) {
                    record(y0 - sy, x0);
                    record(y0, x0 - sx);
                }
            }

            return cells;
        }

        function cellIntersectsSegment(row, col, startRow, startCol, endRow, endCol) {
            const half = 0.5;
            const xMin = col - half;
            const xMax = col + half;
            const yMin = row - half;
            const yMax = row + half;
            const x0 = startCol;
            const y0 = startRow;
            const x1 = endCol;
            const y1 = endRow;
            if (x0 === x1 && y0 === y1) {
                return row === y0 && col === x0;
            }
            return segmentIntersectsRect(x0, y0, x1, y1, xMin, xMax, yMin, yMax);
        }

        function segmentIntersectsRect(x0, y0, x1, y1, xMin, xMax, yMin, yMax) {
            let t0 = 0;
            let t1 = 1;
            const dx = x1 - x0;
            const dy = y1 - y0;
            const checks = [
                { p: -dx, q: x0 - xMin },
                { p: dx, q: xMax - x0 },
                { p: -dy, q: y0 - yMin },
                { p: dy, q: yMax - y0 }
            ];
            for (const { p, q } of checks) {
                if (p === 0) {
                    if (q < 0) {
                        return false;
                    }
                    continue;
                }
                const t = q / p;
                if (p < 0) {
                    if (t > t1) {
                        return false;
                    }
                    if (t > t0) {
                        t0 = t;
                    }
                } else {
                    if (t < t0) {
                        return false;
                    }
                    if (t < t1) {
                        t1 = t;
                    }
                }
            }
            if (t0 === t1) {
                return false;
            }
            return t0 <= t1;
        }

        function resolveBounds(minValue, maxValue, defaultMin = 0, defaultMax = defaultMin) {
            const resolvedMin = typeof minValue === 'number' ? minValue : defaultMin;
            let resolvedMax;
            if (typeof maxValue === 'number') {
                resolvedMax = maxValue;
            } else if (typeof minValue === 'number') {
                resolvedMax = resolvedMin;
            } else {
                resolvedMax = defaultMax;
            }
            if (typeof resolvedMax !== 'number') {
                resolvedMax = resolvedMin;
            }
            if (resolvedMax < resolvedMin) {
                resolvedMax = resolvedMin;
            }
            return { min: resolvedMin, max: resolvedMax };
        }

        function normalizeDirectionVector(dRow, dCol) {
            if (dRow === 0 && dCol === 0) {
                return null;
            }
            return {
                row: dRow === 0 ? 0 : (dRow > 0 ? 1 : -1),
                col: dCol === 0 ? 0 : (dCol > 0 ? 1 : -1)
            };
        }

        function rotateVector90(vector) {
            if (!vector) {
                return null;
            }
            return { row: -vector.col, col: vector.row };
        }

        const CARDINAL_DIRECTIONS = [
            { row: -1, col: 0 },
            { row: 1, col: 0 },
            { row: 0, col: -1 },
            { row: 0, col: 1 }
        ];

        const DIAGONAL_DIRECTIONS = [
            { row: -1, col: -1 },
            { row: -1, col: 1 },
            { row: 1, col: -1 },
            { row: 1, col: 1 }
        ];

        function maybeExcludeSelfCells(cells, ctx, shouldExclude) {
            if (!Array.isArray(cells) || cells.length === 0) {
                return [];
            }
            if (!shouldExclude) {
                return cells.slice();
            }
            return cells.filter(([row, col]) => !(row === ctx.center && col === ctx.center));
        }

        function buildDirectionalLineCells(centerRow, centerCol, dir, minDistance, maxDistance, withinBounds) {
            if (!dir) {
                return [];
            }
            const computedStart = Math.ceil(typeof minDistance === 'number' ? minDistance : 1);
            const start = Math.max(0, computedStart);
            const endCandidate = typeof maxDistance === 'number' ? maxDistance : computedStart;
            const end = Math.max(start, Math.floor(endCandidate));
            const cells = [];
            const seen = new Set();
            for (let step = start; step <= end; step++) {
                const r = centerRow + dir.row * step;
                const c = centerCol + dir.col * step;
                if (!withinBounds(r, c)) {
                    continue;
                }
                const key = `${r},${c}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    cells.push([r, c]);
                }
            }
            return cells;
        }

        function buildMultiDirectionLineCells(centerRow, centerCol, directions, minDistance, maxDistance, withinBounds) {
            const cells = [];
            const seen = new Set();
            directions.forEach(dir => {
                const lineCells = buildDirectionalLineCells(centerRow, centerCol, dir, minDistance, maxDistance, withinBounds);
                lineCells.forEach(([row, col]) => {
                    const key = `${row},${col}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        cells.push([row, col]);
                    }
                });
            });
            return cells;
        }

        function buildCrossLineCells(centerRow, centerCol, minDistance, maxDistance, withinBounds) {
            return buildMultiDirectionLineCells(centerRow, centerCol, CARDINAL_DIRECTIONS, minDistance, maxDistance, withinBounds);
        }

        function buildDiagonalCrossLineCells(centerRow, centerCol, minDistance, maxDistance, withinBounds) {
            return buildMultiDirectionLineCells(centerRow, centerCol, DIAGONAL_DIRECTIONS, minDistance, maxDistance, withinBounds);
        }

        function buildEightDirectionLineCells(centerRow, centerCol, minDistance, maxDistance, withinBounds) {
            return buildMultiDirectionLineCells(
                centerRow,
                centerCol,
                CARDINAL_DIRECTIONS.concat(DIAGONAL_DIRECTIONS),
                minDistance,
                maxDistance,
                withinBounds
            );
        }

        function buildDirectionalConeCells(centerRow, centerCol, dir, minDistance, maxDistance, withinBounds) {
            if (!dir) {
                return [];
            }
            const computedStart = Math.ceil(typeof minDistance === 'number' ? minDistance : 1);
            const start = Math.max(0, computedStart);
            const endCandidate = typeof maxDistance === 'number' ? maxDistance : computedStart;
            const end = Math.max(start, Math.floor(endCandidate));
            const perp = rotateVector90(dir);
            const cells = [];
            const seen = new Set();
            for (let step = start; step <= end; step++) {
                const lateralRadius = Math.max(0, step - 1);
                for (let offset = -lateralRadius; offset <= lateralRadius; offset++) {
                    const r = centerRow + dir.row * step + (perp ? perp.row * offset : 0);
                    const c = centerCol + dir.col * step + (perp ? perp.col * offset : 0);
                    if (!withinBounds(r, c)) {
                        continue;
                    }
                    const key = `${r},${c}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        cells.push([r, c]);
                    }
                }
            }
            return cells;
        }

        function buildPerpendicularLineThrough(row, col, dir, minOffset, maxOffset, withinBounds) {
            if (!dir) {
                return [[row, col]];
            }
            const perp = rotateVector90(dir);
            if (!perp) {
                return [[row, col]];
            }
            const resolvedMin = typeof minOffset === 'number' ? minOffset : 0;
            const resolvedMax = typeof maxOffset === 'number' ? maxOffset : resolvedMin;
            const start = Math.ceil(Math.min(resolvedMin, resolvedMax));
            const end = Math.floor(Math.max(resolvedMin, resolvedMax));
            const cells = [];
            const seen = new Set();
            for (let step = start; step <= end; step++) {
                const r = row + perp.row * step;
                const c = col + perp.col * step;
                if (!withinBounds(r, c)) {
                    continue;
                }
                const key = `${r},${c}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    cells.push([r, c]);
                }
            }
            return cells;
        }

        function parseCustomCoordinateList(entries, meta, key) {
            if (!entries || !key) {
                return [];
            }
            const metaEntry = meta?.[key];
            const textSource = typeof metaEntry?.text === 'string'
                ? metaEntry.text
                : (typeof entries[key] === 'string' ? entries[key] : null);
            const fallbackSource = !textSource && Array.isArray(entries[key])
                ? `[${entries[key].join(' ')}]`
                : null;
            const source = textSource || fallbackSource;
            if (!source) {
                return [];
            }
            const pairs = [];
            const pairRegex = /\[([^\[\]]+)\]/g;
            let match;
            while ((match = pairRegex.exec(source)) !== null) {
                const coords = match[1].split(/[, ]+/).filter(Boolean);
                if (coords.length < 2) {
                    continue;
                }
                const row = parseFloat(coords[0]);
                const col = parseFloat(coords[1]);
                if (Number.isFinite(row) && Number.isFinite(col)) {
                    pairs.push([row, col]);
                }
            }
            if (!pairs.length && Array.isArray(entries[key])) {
                const tokens = entries[key];
                let buffer = [];
                tokens.forEach(token => {
                    const clean = token.replace(/[\[\],]/g, '');
                    if (!clean) {
                        return;
                    }
                    buffer.push(clean);
                    if (buffer.length === 2) {
                        const row = parseFloat(buffer[0]);
                        const col = parseFloat(buffer[1]);
                        if (Number.isFinite(row) && Number.isFinite(col)) {
                            pairs.push([row, col]);
                        }
                        buffer = [];
                    }
                });
            }
            return pairs;
        }

        function normalizeSymmetryValue(value) {
            if (typeof value !== 'string') {
                return 'none';
            }
            const normalized = value.trim().toLowerCase();
            if (normalized === 'four_way' || normalized === 'four-way') {
                return 'four_way';
            }
            if (normalized === 'eight_way' || normalized === 'eight-way') {
                return 'eight_way';
            }
            return 'none';
        }

        function applyCustomSymmetry(offsets, symmetry) {
            if (!Array.isArray(offsets) || offsets.length === 0) {
                return [];
            }
            const normalized = normalizeSymmetryValue(symmetry);
            if (normalized === 'none') {
                return offsets.map(([row, col]) => [row, col]);
            }
            const seen = new Set();
            const result = [];

            const add = (row, col) => {
                const key = `${row},${col}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    result.push([row, col]);
                }
            };

            const addRotations = (row, col) => {
                add(row, col);
                add(-col, row);
                add(-row, -col);
                add(col, -row);
            };

            offsets.forEach(([row, col]) => addRotations(row, col));

            if (normalized === 'eight_way') {
                offsets.forEach(([row, col]) => addRotations(col, row));
            }

            return result;
        }

        function getCustomAoeOffsets(entries, meta) {
            const base = parseCustomCoordinateList(entries, meta, 'custom_aoe');
            if (!base.length) {
                return [];
            }
            return applyCustomSymmetry(base, entries.aoe_symmetry);
        }

        function getCustomRangeOffsets(entries, meta) {
            const base = parseCustomCoordinateList(entries, meta, 'custom_range');
            if (!base.length) {
                return [];
            }
            return applyCustomSymmetry(base, entries.range_symmetry);
        }

        function orientOffsetsForDirection(offsets, dir) {
            if (!Array.isArray(offsets) || offsets.length === 0) {
                return [];
            }
            if (!dir || (dir.row === 0 && dir.col === 0)) {
                return offsets.map(([row, col]) => [row, col]);
            }
            const right = rotateVector90(dir) || { row: 0, col: 0 };
            return offsets.map(([forward, lateral]) => [
                dir.row * forward + right.row * lateral,
                dir.col * forward + right.col * lateral
            ]);
        }

        function translateOffsets(anchorRow, anchorCol, offsets, withinBounds) {
            if (!Array.isArray(offsets) || offsets.length === 0) {
                return [];
            }
            const cells = [];
            const seen = new Set();
            offsets.forEach(([dRow, dCol]) => {
                const targetRow = anchorRow + dRow;
                const targetCol = anchorCol + dCol;
                if (!Number.isFinite(targetRow) || !Number.isFinite(targetCol)) {
                    return;
                }
                const row = Math.round(targetRow);
                const col = Math.round(targetCol);
                if (!withinBounds(row, col)) {
                    return;
                }
                const key = `${row},${col}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    cells.push([row, col]);
                }
            });
            return cells;
        }

        function resetVariableRequirements() {
            variableState.required.clear();
        }

        function registerVariable(name) {
            const trimmed = (name || '').trim();
            if (!trimmed) {
                return null;
            }
            const lower = trimmed.toLowerCase();
            if (lower === 'size') {
                variableState.canonical.set('size', 'size');
                variableState.values.set('size', 1);
                return 'size';
            }
            if (!variableState.canonical.has(lower)) {
                variableState.canonical.set(lower, trimmed);
            }
            const canonical = variableState.canonical.get(lower);
            if (!variableState.values.has(canonical)) {
                variableState.values.set(canonical, VARIABLE_SLIDER_DEFAULT);
            }
            variableState.required.add(canonical);
            return canonical;
        }

        function getVariableValue(name) {
            const canonical = registerVariable(name);
            if (!canonical) {
                return VARIABLE_SLIDER_DEFAULT;
            }
            return variableState.values.get(canonical) ?? VARIABLE_SLIDER_DEFAULT;
        }

        function evaluateExpression(raw) {
            if (raw === null || raw === undefined) {
                return null;
            }
            if (typeof raw === 'number') {
                return Number.isFinite(raw) ? raw : null;
            }
            if (Array.isArray(raw)) {
                return null;
            }
            const text = String(raw).trim();
            if (!text) {
                return null;
            }
            const percentMatch = text.match(/^(-?\d+(?:\.\d+)?)%$/);
            if (percentMatch) {
                return parseFloat(percentMatch[1]) / 100;
            }
            if (/^[+-]?\d+(?:\.\d+)?$/.test(text)) {
                return parseFloat(text);
            }
            let expression = text.replace(/([A-Za-z_][A-Za-z0-9_]*)/g, (match) => {
                const value = getVariableValue(match);
                return typeof value === 'number' ? value : VARIABLE_SLIDER_DEFAULT;
            });
            expression = expression.replace(/(\d+(?:\.\d+)?)%/g, (_, num) => String(parseFloat(num) / 100));
            if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
                return null;
            }
            try {
                const result = Function('"use strict"; return (' + expression + ');')();
                return Number.isFinite(result) ? result : null;
            } catch (error) {
                return null;
            }
        }

        function renderVariableControls(hasScenario) {
            if (!variableControlsEl) {
                return;
            }
            const variableLabelKeys = {
                bonus_melee_range: 'targetVariableBonusMeleeRange',
                bonus_range: 'targetVariableBonusRange'
            };
            const getVariableLabel = name => {
                const key = variableLabelKeys[name];
                return key ? t(key) : name;
            };
            const adjustable = hasScenario
                ? Array.from(variableState.required).filter(name => name.toLowerCase() !== 'size')
                : [];
            if (adjustable.length === 0) {
                variableControlsEl.innerHTML = '';
                variableControlsEl.style.display = 'none';
                return;
            }
            adjustable.sort((a, b) => a.localeCompare(b));
            const controlsHtml = adjustable.map(name => {
                const value = variableState.values.get(name) ?? VARIABLE_SLIDER_DEFAULT;
                const label = getVariableLabel(name);
                return `
                    <label class="target-variable-group">
                        <span class="target-variable-label">${escapeHtml(label)}</span>
                        <input type="range" min="${VARIABLE_SLIDER_MIN}" max="${VARIABLE_SLIDER_MAX}" step="1" value="${value}" data-variable="${escapeHtml(name)}">
                        <span class="target-variable-value">${value}</span>
                    </label>
                `;
            }).join('');
            variableControlsEl.innerHTML = `
                <div class="target-variable-heading">
                    <span>${escapeHtml(t('targetVariablesHeading'))}</span>
                    <span class="target-variable-hint">${escapeHtml(t('targetVariablesHint'))}</span>
                </div>
                ${controlsHtml}
            `;
            variableControlsEl.style.display = 'flex';
            variableControlsEl.querySelectorAll('input[type="range"]').forEach(input => {
                input.addEventListener('input', handleVariableInput);
            });
        }

        function handleVariableInput(event) {
            const input = event.currentTarget;
            const name = input?.dataset?.variable;
            if (!name) {
                return;
            }
            const value = Number(input.value);
            variableState.values.set(name, value);
            const valueLabel = input.closest('.target-variable-group')?.querySelector('.target-variable-value');
            if (valueLabel) {
                valueLabel.textContent = String(value);
            }
            render(lastRawText, lastRenderOptions);
        }

        function blockCell(row, col) {
            if (!helpers.withinBounds(row, col)) {
                return;
            }
            if (row === CENTER && col === CENTER) {
                return;
            }
            const key = coordKey(row, col);
            if (blocked.has(key)) {
                return;
            }
            blocked.add(key);
            const cell = cells[row][col];
            if (cell) {
                cell.classList.add('target-cell-blocked');
                cell.setAttribute('aria-disabled', 'true');
            }
        }

        function unblockCell(row, col) {
            const key = coordKey(row, col);
            if (!blocked.has(key)) {
                return;
            }
            blocked.delete(key);
            const cell = cells[row][col];
            if (cell) {
                cell.classList.remove('target-cell-blocked');
                cell.removeAttribute('aria-disabled');
            }
        }

        function toggleObstacle(event) {
            const cell = event.currentTarget;
            if (!cell || cell.classList.contains('origin')) {
                return;
            }
            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);
            const key = coordKey(row, col);
            if (blocked.has(key)) {
                unblockCell(row, col);
            } else {
                blockCell(row, col);
            }
            clearHoverHighlights();
            updateRangeHighlights();
        }

        function clearObstacles() {
            if (!blocked.size) {
                return;
            }
            blocked.forEach(key => {
                const [row, col] = key.split(',').map(Number);
                const cell = cells[row]?.[col];
                if (cell) {
                    cell.classList.remove('target-cell-blocked');
                    cell.removeAttribute('aria-disabled');
                }
            });
            blocked.clear();
            clearHoverHighlights();
            updateRangeHighlights();
        }

        function applySampleObstacles() {
            SAMPLE_OBSTACLE_LAYOUT.forEach(([dRow, dCol]) => {
                blockCell(CENTER + dRow, CENTER + dCol);
            });
            clearHoverHighlights();
            updateRangeHighlights();
        }

        function applyControlCopy() {
            if (obstacleHintEl) {
                obstacleHintEl.textContent = t('targetObstaclesHint');
            }
            if (addObstaclesBtn) {
                addObstaclesBtn.textContent = t('targetAddObstacles');
            }
            if (clearObstaclesBtn) {
                clearObstaclesBtn.textContent = t('targetClearObstacles');
            }
        }

        function bindControls() {
            if (controlsBound) {
                return;
            }
            if (addObstaclesBtn) {
                addObstaclesBtn.addEventListener('click', applySampleObstacles);
            }
            if (clearObstaclesBtn) {
                clearObstaclesBtn.addEventListener('click', clearObstacles);
            }
            controlsBound = true;
        }

        function init() {
            if (initialized) {
                return;
            }
            gridEl = document.getElementById('targetGrid');
            summaryEl = document.getElementById('targetVisualizerSummary');
            errorEl = document.getElementById('targetVisualizerError');
            warningEl = document.getElementById('targetVisualizerWarning');
            rawCodeEl = document.getElementById('targetModalBody');
            legendRangeEl = document.getElementById('targetLegendRangeText');
            legendSplashEl = document.getElementById('targetLegendSplashText');
            variableControlsEl = document.getElementById('targetVariableControls');
            obstacleHintEl = document.getElementById('targetObstaclesHint');
            addObstaclesBtn = document.getElementById('targetAddObstaclesBtn');
            clearObstaclesBtn = document.getElementById('targetClearObstaclesBtn');
            if (!gridEl) {
                return;
            }
            buildGrid();
            bindControls();
            applyControlCopy();
            initialized = true;
        }

        function buildGrid() {
            gridEl.innerHTML = '';
            for (let row = 0; row < GRID_SIZE; row++) {
                for (let col = 0; col < GRID_SIZE; col++) {
                    const cell = document.createElement('div');
                    cell.className = 'target-cell';
                    cell.dataset.row = String(row);
                    cell.dataset.col = String(col);
                    if (row === CENTER && col === CENTER) {
                        cell.classList.add('origin');
                    }
                    cell.addEventListener('mouseenter', handleHover);
                    cell.addEventListener('mouseleave', clearHoverHighlights);
                    cell.addEventListener('click', toggleObstacle);
                    gridEl.appendChild(cell);
                    cells[row][col] = cell;
                }
            }
        }

        function handleHover(event) {
            if (!activeScenario) {
                return;
            }
            const cell = event.currentTarget;
            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);
            if (activeScenario.alwaysShowAoe) {
                clearHoverHighlights();
                const aoeCells = activeScenario.aoeCells(helpers.center, helpers.center, helpers) || [];
                const highlightCells = aoeCells.length ? aoeCells : [[helpers.center, helpers.center]];
                highlightCells.forEach(([r, c]) => {
                    if (!helpers.withinBounds(r, c)) {
                        return;
                    }
                    const aoeCell = cells[r][c];
                    if (aoeCell) {
                        aoeCell.classList.add('target-cell-aoe');
                    }
                });
                return;
            }
            if (!activeScenario.isTargetable(row, col, helpers)) {
                clearHoverHighlights();
                return;
            }
            clearHoverHighlights();
            const aoeCells = activeScenario.aoeCells(row, col, helpers) || [];
            const includesTarget = aoeCells.length === 0 || aoeCells.some(([r, c]) => r === row && c === col);
            cell.classList.add(includesTarget ? 'target-cell-target' : 'target-cell-selected');
            const highlightCells = aoeCells.length ? aoeCells : [[row, col]];
            highlightCells.forEach(([r, c]) => {
                if (!helpers.withinBounds(r, c)) {
                    return;
                }
                const aoeCell = cells[r][c];
                if (aoeCell) {
                    aoeCell.classList.add('target-cell-aoe');
                }
            });
        }

        function clearHoverHighlights() {
            cells.forEach(row => row.forEach(cell => {
                if (!cell) {
                    return;
                }
                cell.classList.remove('target-cell-target', 'target-cell-selected', 'target-cell-aoe');
            }));
        }

        function clearRangeHighlights() {
            cells.forEach(row => row.forEach(cell => {
                if (!cell) {
                    return;
                }
                cell.classList.remove('target-cell-in-range');
            }));
        }

        function clearGridState() {
            clearRangeHighlights();
            clearHoverHighlights();
        }

        function updateRangeHighlights() {
            clearRangeHighlights();
            if (!activeScenario) {
                return;
            }
            if (activeScenario.alwaysShowAoe) {
                const aoeCells = activeScenario.aoeCells(helpers.center, helpers.center, helpers) || [];
                const highlightCells = aoeCells.length ? aoeCells : [[helpers.center, helpers.center]];
                highlightCells.forEach(([row, col]) => {
                    if (!helpers.withinBounds(row, col)) {
                        return;
                    }
                    const cell = cells[row][col];
                    if (cell) {
                        cell.classList.add('target-cell-in-range');
                    }
                });
                return;
            }
            for (let row = 0; row < GRID_SIZE; row++) {
                for (let col = 0; col < GRID_SIZE; col++) {
                    const cell = cells[row][col];
                    if (!cell) {
                        continue;
                    }
                    if (activeScenario.isTargetable(row, col, helpers)) {
                        cell.classList.add('target-cell-in-range');
                    }
                }
            }
        }

        function render(rawText, options) {
            init();
            const text = typeof rawText === 'string' ? rawText : '';
            lastRawText = text;
            if (options) {
                lastRenderOptions = options;
            }
            const renderOptions = lastRenderOptions || {};
            resetVariableRequirements();
            clearHoverHighlights();
            if (!text.trim()) {
                activeScenario = null;
                clearGridState();
                if (summaryEl) {
                    summaryEl.textContent = t('targetModalEmpty');
                }
                renderRawCode('', null);
                showError('');
                showWarning('');
                renderVariableControls(false);
                return;
            }

            const parsed = parseTargetBlock(text);
            const supportWarnings = buildSupportWarnings(parsed);
            const extraWarnings = [];
            if (renderOptions?.extraWarning) {
                if (Array.isArray(renderOptions.extraWarning)) {
                    renderOptions.extraWarning.forEach(message => {
                        if (typeof message === 'string' && message.trim()) {
                            extraWarnings.push(message.trim());
                        }
                    });
                } else if (typeof renderOptions.extraWarning === 'string' && renderOptions.extraWarning.trim()) {
                    extraWarnings.push(renderOptions.extraWarning.trim());
                }
            }
            const warningText = supportWarnings.concat(extraWarnings).filter(Boolean).join('; ');
            const built = buildScenario(parsed, renderOptions);
            renderRawCode(text, built.errorLineIndex);
            if (built.error) {
                activeScenario = null;
                clearGridState();
                if (summaryEl) {
                    summaryEl.textContent = t('targetSummaryUnavailable');
                }
                showError(built.error);
                showWarning('');
                renderVariableControls(false);
                return;
            }

            activeScenario = built.scenario;
            showError('');
            showWarning(warningText);
            if (summaryEl) {
                summaryEl.textContent = built.scenario.summary || t('targetSummaryDefault');
            }
            renderVariableControls(true);
            updateRangeHighlights();
        }

        function refreshCopy() {
            init();
            applyControlCopy();
            renderVariableControls(!!activeScenario);
            if (legendRangeEl) {
                legendRangeEl.textContent = t('targetLegendRange');
            }
            if (legendSplashEl) {
                legendSplashEl.textContent = t('targetLegendSplash');
            }
            if (!lastRawText.trim()) {
                if (summaryEl) {
                    summaryEl.textContent = t('targetSummaryDefault');
                }
                renderRawCode('', null);
                showError('');
                showWarning('');
                return;
            }
            render(lastRawText, lastRenderOptions);
        }

        function renderRawCode(text, errorLineIndex) {
            if (!rawCodeEl) {
                return;
            }
            const trimmed = text.trim();
            if (!trimmed) {
                rawCodeEl.textContent = t('targetModalEmpty');
                return;
            }
            const lines = text.replace(/\r\n/g, '\n').split('\n');
            const html = lines.map((line, idx) => {
                const sanitized = escapeHtml(line || '');
                const content = sanitized === '' ? '&nbsp;' : sanitized;
                const cls = idx === errorLineIndex ? 'target-code-line error' : 'target-code-line';
                return `<span class="${cls}">${content}</span>`;
            }).join('\n');
            rawCodeEl.innerHTML = html;
        }

        function showError(message) {
            if (!errorEl) {
                return;
            }
            if (message) {
                errorEl.textContent = `${t('targetRenderErrorPrefix')} ${message}`;
                errorEl.style.display = 'block';
            } else {
                errorEl.textContent = '';
                errorEl.style.display = 'none';
            }
        }

        function showWarning(message) {
            if (!warningEl) {
                return;
            }
            if (message) {
                warningEl.textContent = `${t('targetRenderWarningPrefix')} ${message}`;
                warningEl.style.display = 'block';
            } else {
                warningEl.textContent = '';
                warningEl.style.display = 'none';
            }
        }

        function buildSupportWarnings(parseResult) {
            const entries = parseResult.entries;
            const warnings = [];
            const ignoredKeys = new Set([
                'allow_diagonals',
                'as_the_crow_flies',
                'range_excludes_blocking',
                'shotgun_mode',
                'aoe_display_exclude_restrictions',
                'aoe_leading_edge_only',
                'aoe_tile_requires_element',
                'aoe_tile_requires_tags',
                'mouse_offset',
                'min_targets',
                'max_targets',
                'aoe_chance',
                'randomize_target_within_range',
                'prioritize_dont_change_direction'
            ]);
            const unsupportedRestrictions = new Set([
                'must_be_moveable'
            ]);
            Object.keys(entries).forEach(key => {
                if (ignoredKeys.has(key)) {
                    warnings.push(key);
                }
            });

            const restrictionTokens = listFrom(entries.restrictions)
                .concat(listFrom(entries.aoe_restrictions))
                .map(value => String(value).toLowerCase());
            restrictionTokens.forEach(token => {
                if (unsupportedRestrictions.has(token)) {
                    warnings.push(`restriction ${token}`);
                }
            });

            return warnings;
        }

        function parseTargetBlock(text) {
            const normalized = text.replace(/\r\n/g, '\n');
            const lines = normalized.split('\n');
            const entries = {};
            const meta = {};
            let firstMalformed = null;

            const bracketDelta = value => {
                const openCount = (value.match(/\[/g) || []).length;
                const closeCount = (value.match(/\]/g) || []).length;
                return openCount - closeCount;
            };

            for (let index = 0; index < lines.length; index++) {
                const rawLine = lines[index];
                const line = rawLine.trim();
                if (!line || line === 'target {' || line === '}') {
                    continue;
                }
                const spaceIndex = line.indexOf(' ');
                if (spaceIndex === -1) {
                    if (firstMalformed === null) {
                        firstMalformed = index;
                    }
                    continue;
                }
                const key = line.substring(0, spaceIndex).trim();
                const startIndex = index;
                let rawValue = line.substring(spaceIndex + 1).trim();
                if (key === 'custom_aoe' && rawValue.startsWith('[') && !rawValue.endsWith(']')) {
                    const collected = [rawValue];
                    let depth = bracketDelta(rawValue);
                    while (depth > 0 && index + 1 < lines.length) {
                        const nextLine = lines[++index];
                        const nextValue = nextLine.trim();
                        if (nextValue) {
                            collected.push(nextValue);
                        }
                        depth += bracketDelta(nextValue);
                    }
                    rawValue = collected.join(' ');
                }
                let value = rawValue;
                if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
                    const inner = rawValue.slice(1, -1).trim();
                    value = inner ? inner.split(/\s+/) : [];
                }
                entries[key] = value;
                meta[key] = { line: startIndex, raw: value, text: rawValue };
            }

            return { lines, entries, meta, firstMalformed };
        }

        function buildScenario(parseResult, options) {
            const entries = parseResult.entries;
            const modeValue = entries.target_mode || '';
            const mode = typeof modeValue === 'string' ? modeValue.toLowerCase() : '';
            const entryCount = Object.keys(entries).length;
            const isDashAttack = !!options?.isDashAttack;

            if (entryCount === 0 && typeof parseResult.firstMalformed === 'number') {
                return {
                    scenario: null,
                    error: t('targetRenderParseError'),
                    errorLineIndex: parseResult.firstMalformed
                };
            }

            if (!mode) {
                const lineIndex = typeof parseResult.meta.target_mode?.line === 'number'
                    ? parseResult.meta.target_mode.line
                    : (typeof parseResult.firstMalformed === 'number' ? parseResult.firstMalformed : 0);
                return {
                    scenario: null,
                    error: t('targetRenderMissingMode'),
                    errorLineIndex: lineIndex
                };
            }

            if (mode === 'none') {
                return {
                    scenario: createSelfScenario(parseResult),
                    error: null,
                    errorLineIndex: null
                };
            }

            if (mode === 'tile') {
                return {
                    scenario: createTileScenario(parseResult),
                    error: null,
                    errorLineIndex: null
                };
            }

            if (mode === 'direction' || mode === 'direction8') {
                return {
                    scenario: createDirectionScenario(parseResult, mode, isDashAttack),
                    error: null,
                    errorLineIndex: null
                };
            }

            return {
                scenario: null,
                error: `${t('targetRenderUnsupported')} ${mode}`,
                errorLineIndex: typeof parseResult.meta.target_mode?.line === 'number'
                    ? parseResult.meta.target_mode.line
                    : null
            };
        }

        function createSelfScenario(parseResult) {
            const entries = parseResult.entries;
            const aoeBounds = resolveBounds(numberFrom(entries.min_aoe), numberFrom(entries.max_aoe), 0, 0);
            const aoeMode = typeof entries.aoe_mode === 'string' ? entries.aoe_mode.toLowerCase() : '';
            const customOffsets = aoeMode === 'custom' ? getCustomAoeOffsets(entries, parseResult.meta) : [];
            const hasCustomAoe = customOffsets.length > 0;
            const hasAllAoe = aoeMode === 'all';
            const aoeExcludesSelf = asBoolean(entries.aoe_excludes_self);
            const hasRadiusAoe = aoeBounds.max !== 0 || aoeBounds.min !== 0;
            const hasAoe = hasCustomAoe || hasRadiusAoe || hasAllAoe;
            const summaryParts = [
                `${t('targetSummaryMode')}: ${t('targetSummarySelf')}`
            ];
            if (hasRadiusAoe) {
                const splashLabel = formatRangeLabel(entries.min_aoe, entries.max_aoe, aoeBounds.min, aoeBounds.max, aoeBounds.max);
                summaryParts.push(`${t('targetSummarySplash')} ${splashLabel}`);
            } else if (hasCustomAoe) {
                summaryParts.push(`${t('targetSummarySplash')} custom`);
            } else if (hasAllAoe) {
                summaryParts.push(`${t('targetSummarySplash')} all`);
            }

            return {
                summary: summaryParts.join(' · '),
                alwaysShowAoe: true,
                isTargetable(row, col, ctx) {
                    return row === ctx.center && col === ctx.center;
                },
                aoeCells(row, col, ctx) {
                    if (hasCustomAoe) {
                        const cells = translateOffsets(row, col, customOffsets, ctx.withinBounds);
                        return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                    }
                    if (hasAllAoe) {
                        return maybeExcludeSelfCells(ctx.allGridCells(), ctx, aoeExcludesSelf);
                    }
                    if (aoeMode === 'cross') {
                        const cells = buildCrossLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                        return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                    }
                    if (aoeMode === 'diagcross') {
                        const cells = buildDiagonalCrossLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                        return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                    }
                    if (aoeMode === '8cross') {
                        const cells = buildEightDirectionLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                        return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                    }
                    if (hasRadiusAoe) {
                        const cells = ctx.cellsWithinRadius(row, col, Math.max(0, aoeBounds.max), Math.max(0, aoeBounds.min));
                        return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                    }
                    return [];
                }
            };
        }

        function createTileScenario(parseResult) {
            const entries = parseResult.entries;
            const minRangeValue = numberFrom(entries.min_range);
            const minRange = typeof minRangeValue === 'number' ? minRangeValue : 0;
            const maxRangeRaw = numberFrom(entries.max_range);
            const fallbackMax = typeof maxRangeRaw === 'number' ? maxRangeRaw : Math.max(minRange + 3, 4);
            const rangeMode = (entries.range_mode || 'standard').toLowerCase();
            const customRangeOffsets = rangeMode === 'custom' ? getCustomRangeOffsets(entries, parseResult.meta) : [];
            const hasCustomRange = customRangeOffsets.length > 0;
            const customRangeCells = hasCustomRange
                ? translateOffsets(helpers.center, helpers.center, customRangeOffsets, helpers.withinBounds)
                : [];
            const customRangeKeys = hasCustomRange
                ? new Set(customRangeCells.map(([row, col]) => coordKey(row, col)))
                : null;
            const restrictions = listFrom(entries.restrictions).map(value => String(value).toLowerCase());
            const aoeRestrictions = listFrom(entries.aoe_restrictions).map(value => String(value).toLowerCase());
            const lineOfSightRestrictions = restrictions.concat(aoeRestrictions);
            const mustFit2x2 = restrictions.includes('must_fit_2x2_character');
            const straightShot = asBoolean(entries.straight_shot) || restrictions.includes('straight_shot');
            const requiresLine = straightShot
                || lineOfSightRestrictions.includes('must_have_line_of_sight')
                || lineOfSightRestrictions.includes('must_have_line_of_sight_unpurgable');
            const mustMove = asBoolean(entries.must_move) || restrictions.includes('must_move');
            const mustBeMoveable = restrictions.includes('must_be_moveable');
            const aoeMode = typeof entries.aoe_mode === 'string' ? entries.aoe_mode.toLowerCase() : '';
            const aoeBounds = resolveBounds(numberFrom(entries.min_aoe), numberFrom(entries.max_aoe), 0, 0);
            const aoeExcludesSelf = asBoolean(entries.aoe_excludes_self);
            const customOffsets = aoeMode === 'custom' ? getCustomAoeOffsets(entries, parseResult.meta) : [];
            const hasCustomAoe = customOffsets.length > 0;
            const hasAllAoe = aoeMode === 'all';
            const dontOrientAoe = asBoolean(entries.dont_orient_aoe);
            const hasRadiusAoe = aoeBounds.max !== 0 || aoeBounds.min !== 0;
            const hasAoe = hasCustomAoe || hasRadiusAoe || hasAllAoe;
            const includeAoeInRange = asBoolean(entries.range_display_include_aoe)
                && aoeMode === 'custom'
                && hasCustomAoe;

            const summaryParts = [
                `${t('targetSummaryMode')}: ${t('targetSummaryTile')}`,
                `${t('targetSummaryRange')} ${hasCustomRange ? 'custom' : formatRangeLabel(entries.min_range, entries.max_range, minRange, maxRangeRaw, fallbackMax)}`
            ];
            if (rangeMode === 'diagcross') {
                summaryParts.push(t('targetSummaryDiagonalOnly'));
            } else if (rangeMode === 'cross') {
                summaryParts.push(t('targetSummaryOrthOnly'));
            }
            if (hasRadiusAoe) {
                const splashLabel = formatRangeLabel(entries.min_aoe, entries.max_aoe, aoeBounds.min, aoeBounds.max, aoeBounds.max);
                summaryParts.push(`${t('targetSummarySplash')} ${splashLabel}`);
            } else if (hasCustomAoe) {
                summaryParts.push(`${t('targetSummarySplash')} custom`);
            } else if (hasAllAoe) {
                summaryParts.push(`${t('targetSummarySplash')} all`);
            }
            if (requiresLine) {
                summaryParts.push(t('targetSummaryRequiresLine'));
            }

            function buildAoeCells(row, col, ctx) {
                if (!hasAoe) {
                    return [];
                }
                if (aoeMode === 'custom' && hasCustomAoe) {
                    const dir = dontOrientAoe ? null : normalizeDirectionVector(row - ctx.center, col - ctx.center);
                    const oriented = dontOrientAoe ? customOffsets : orientOffsetsForDirection(customOffsets, dir);
                    const cells = translateOffsets(row, col, oriented, ctx.withinBounds);
                    return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                }
                if (aoeMode === 'all') {
                    return maybeExcludeSelfCells(ctx.allGridCells(), ctx, aoeExcludesSelf);
                }
                if (aoeMode === 'perpline') {
                    const dir = normalizeDirectionVector(row - ctx.center, col - ctx.center);
                    const cells = buildPerpendicularLineThrough(row, col, dir, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                    return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                }
                if (aoeMode === 'cross') {
                    const cells = buildCrossLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                    return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                }
                if (aoeMode === 'diagcross') {
                    const cells = buildDiagonalCrossLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                    return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                }
                if (aoeMode === '8cross') {
                    const cells = buildEightDirectionLineCells(row, col, aoeBounds.min, aoeBounds.max, ctx.withinBounds);
                    return maybeExcludeSelfCells(cells, ctx, aoeExcludesSelf);
                }
                const splash = ctx.cellsWithinRadius(row, col, Math.max(0, aoeBounds.max), Math.max(0, aoeBounds.min));
                return maybeExcludeSelfCells(splash, ctx, aoeExcludesSelf);
            }

            function fits2x2(row, col, ctx) {
                const tiles = [
                    [row, col],
                    [row + 1, col],
                    [row, col + 1],
                    [row + 1, col + 1]
                ];
                for (const [r, c] of tiles) {
                    if (!ctx.withinBounds(r, c) || ctx.isBlocked(r, c)) {
                        return false;
                    }
                }
                return true;
            }

            function isOriginTargetable(row, col, ctx) {
                if (!ctx.withinBounds(row, col)) {
                    return false;
                }
                if (mustBeMoveable && ctx.isBlocked(row, col)) {
                    return false;
                }
                if (mustFit2x2 && !fits2x2(row, col, ctx)) {
                    return false;
                }
                const dRow = row - ctx.center;
                const dCol = col - ctx.center;
                if (hasCustomRange) {
                    if (!customRangeKeys.has(coordKey(row, col))) {
                        return false;
                    }
                    if (mustMove && dRow === 0 && dCol === 0) {
                        return false;
                    }
                    if (requiresLine && !ctx.pathClear(row, col)) {
                        return false;
                    }
                    return true;
                }
                if (dRow === 0 && dCol === 0 && !mustMove) {
                    if (minRange === 0 || (hasAoe && !aoeExcludesSelf)) {
                        return true;
                    }
                }
                if (mustMove && dRow === 0 && dCol === 0) {
                    return false;
                }
                const manhattan = Math.abs(dRow) + Math.abs(dCol);
                const chebyshev = Math.max(Math.abs(dRow), Math.abs(dCol));
                let passesRange = false;
                if (rangeMode === 'diagcross') {
                    if (dRow === 0 && dCol === 0) {
                        return false;
                    }
                    const diagSteps = Math.abs(dRow);
                    const isDiagonal = diagSteps === Math.abs(dCol);
                    if (!isDiagonal) {
                        return false;
                    }
                    passesRange = diagSteps >= Math.max(minRange, 1) && diagSteps <= fallbackMax;
                } else if (rangeMode === 'cross') {
                    if (dRow === 0 && dCol === 0) {
                        return false;
                    }
                    const isOrthogonal = dRow === 0 || dCol === 0;
                    if (!isOrthogonal) {
                        return false;
                    }
                    const orthoSteps = Math.abs(dRow) + Math.abs(dCol);
                    passesRange = orthoSteps >= Math.max(minRange, 1) && orthoSteps <= fallbackMax;
                } else if (rangeMode === '8cross') {
                    if (dRow === 0 && dCol === 0) {
                        return false;
                    }
                    const absRow = Math.abs(dRow);
                    const absCol = Math.abs(dCol);
                    const isLine = dRow === 0 || dCol === 0 || absRow === absCol;
                    if (!isLine) {
                        return false;
                    }
                    const lineSteps = Math.max(absRow, absCol);
                    passesRange = lineSteps >= Math.max(minRange, 1) && lineSteps <= fallbackMax;
                } else if (rangeMode === 'square') {
                    passesRange = chebyshev >= minRange && chebyshev <= fallbackMax;
                } else {
                    passesRange = manhattan >= minRange && manhattan <= fallbackMax;
                }
                if (!passesRange) {
                    return false;
                }
                if (requiresLine && !ctx.pathClear(row, col)) {
                    return false;
                }
                return true;
            }

            const includeAoeCache = includeAoeInRange
                ? { stamp: null, map: null }
                : null;

            const getBlockedStamp = () => {
                if (!blocked.size) {
                    return 'none';
                }
                return Array.from(blocked).sort().join('|');
            };

            function getIncludeAoeMap(ctx) {
                if (!includeAoeInRange) {
                    return null;
                }
                const stamp = getBlockedStamp();
                if (includeAoeCache.stamp === stamp && includeAoeCache.map) {
                    return includeAoeCache.map;
                }
                const hitMap = new Map();
                for (let row = 0; row < GRID_SIZE; row++) {
                    for (let col = 0; col < GRID_SIZE; col++) {
                        if (!isOriginTargetable(row, col, ctx)) {
                            continue;
                        }
                        const origin = { row, col };
                        const aoeCells = buildAoeCells(row, col, ctx);
                        aoeCells.forEach(([hitRow, hitCol]) => {
                            const key = coordKey(hitRow, hitCol);
                            if (!hitMap.has(key)) {
                                hitMap.set(key, []);
                            }
                            hitMap.get(key).push(origin);
                        });
                    }
                }
                includeAoeCache.stamp = stamp;
                includeAoeCache.map = hitMap;
                return hitMap;
            }

            function pickOriginForHit(row, col, ctx) {
                if (!includeAoeInRange) {
                    return null;
                }
                if (isOriginTargetable(row, col, ctx)) {
                    return { row, col };
                }
                const hitMap = getIncludeAoeMap(ctx);
                const options = hitMap ? hitMap.get(coordKey(row, col)) : null;
                if (!options || !options.length) {
                    return null;
                }
                let best = options[0];
                let bestDistance = Math.abs(best.row - row) + Math.abs(best.col - col);
                for (let i = 1; i < options.length; i++) {
                    const option = options[i];
                    const distance = Math.abs(option.row - row) + Math.abs(option.col - col);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        best = option;
                    }
                }
                return best;
            }

            return {
                summary: summaryParts.join(' · '),
                isTargetable(row, col, ctx) {
                    if (isOriginTargetable(row, col, ctx)) {
                        return true;
                    }
                    if (!includeAoeInRange) {
                        return false;
                    }
                    const hitMap = getIncludeAoeMap(ctx);
                    return hitMap ? hitMap.has(coordKey(row, col)) : false;
                },
                aoeCells(row, col, ctx) {
                    if (!includeAoeInRange) {
                        return buildAoeCells(row, col, ctx);
                    }
                    const origin = pickOriginForHit(row, col, ctx);
                    if (!origin) {
                        return [];
                    }
                    return buildAoeCells(origin.row, origin.col, ctx);
                }
            };
        }

        function createDirectionScenario(parseResult, mode, isDashAttack) {
            const entries = parseResult.entries;
            const allowDiagonal = mode === 'direction8';
            const directionVectors = allowDiagonal
                ? CARDINAL_DIRECTIONS.concat(DIAGONAL_DIRECTIONS)
                : CARDINAL_DIRECTIONS;
            const rawMinRange = numberFrom(entries.min_range);
            const rawMaxRange = numberFrom(entries.max_range);
            let hasSelectionRange = Object.prototype.hasOwnProperty.call(entries, 'min_range')
                || Object.prototype.hasOwnProperty.call(entries, 'max_range');
            const aoeMode = typeof entries.aoe_mode === 'string' ? entries.aoe_mode.toLowerCase() : 'line';
            const hasAllAoe = aoeMode === 'all';
            const selectBounds = resolveBounds(rawMinRange, rawMaxRange, 1, 1);
            let selectionMin = Math.max(1, selectBounds.min);
            let selectionMax = Math.max(selectionMin, selectBounds.max);
            const aoeBounds = resolveBounds(numberFrom(entries.min_aoe), numberFrom(entries.max_aoe), 1, selectionMax);
            const splashRadiusRaw = numberFrom(entries.aoe_radius)
                ?? numberFrom(entries.max_aoe_radius)
                ?? numberFrom(entries.max_area)
                ?? 0;
            const splashRadius = Math.max(0, splashRadiusRaw);
            const customOffsets = aoeMode === 'custom' ? getCustomAoeOffsets(entries, parseResult.meta) : [];
            const hasCustomPattern = customOffsets.length > 0;
            const aoeExcludesSelf = asBoolean(entries.aoe_excludes_self);
            const coneMin = Math.max(1, Math.max(0, aoeBounds.min));
            const coneMax = Math.max(coneMin, Math.max(0, aoeBounds.max));
            const isConeMode = aoeMode === 'cone' && !hasCustomPattern && !isDashAttack;
            if (hasAllAoe) {
                const summaryParts = [
                    `${t('targetSummaryMode')}: ${allowDiagonal ? t('targetSummaryDirection8') : t('targetSummaryDirection')}`,
                    `${t('targetSummarySplash')} all`
                ];
                return {
                    summary: summaryParts.join(' · '),
                    alwaysShowAoe: true,
                    isTargetable(row, col, ctx) {
                        return row === ctx.center && col === ctx.center;
                    },
                    aoeCells(row, col, ctx) {
                        return maybeExcludeSelfCells(ctx.allGridCells(), ctx, aoeExcludesSelf);
                    }
                };
            }
            const directionalAoeSelectionUsesAoe = aoeMode === 'line' && !hasCustomPattern && !isDashAttack;
            const lineSelectionUsesAoe = aoeMode === 'line' && !hasCustomPattern;
            if (isConeMode) {
                hasSelectionRange = false;
                selectionMin = 1;
                selectionMax = 1;
            }
            if (directionalAoeSelectionUsesAoe) {
                hasSelectionRange = false;
                const aoeMin = Math.max(1, Math.max(0, aoeBounds.min));
                const aoeMax = Math.max(aoeMin, Math.max(0, aoeBounds.max));
                selectionMin = aoeMin;
                selectionMax = aoeMax;
            }
            const dashLineMode = hasSelectionRange && aoeMode === 'line' && !hasCustomPattern && splashRadius === 0;
            const directionOnlySelection = lineSelectionUsesAoe && splashRadius === 0;
            const summaryParts = [
                `${t('targetSummaryMode')}: ${allowDiagonal ? t('targetSummaryDirection8') : t('targetSummaryDirection')}`,
                `${t('targetSummaryRange')} ${formatStepRange(selectionMin, selectionMax)}`,
                `${t('targetSummaryLineLength')} ${formatStepRange(Math.max(0, aoeBounds.min), Math.max(0, aoeBounds.max))}`
            ];
            if (splashRadius > 0 && !hasCustomPattern) {
                summaryParts.push(`${t('targetSummarySplash')} ${splashRadius}`);
            } else if (hasCustomPattern) {
                summaryParts.push(`${t('targetSummarySplash')} custom`);
            }
            summaryParts.push(t('targetSummaryRequiresLine'));

            const dashMode = isDashAttack && mode === 'direction' && hasSelectionRange && !hasAllAoe;
            if (dashMode) {
                const dashCache = { stamp: null, states: null };

                const directionScore = (dir, row, col) => {
                    const dRow = row - helpers.center;
                    const dCol = col - helpers.center;
                    const length = Math.hypot(dRow, dCol);
                    if (!length) {
                        return -Infinity;
                    }
                    const dirLength = Math.hypot(dir.row, dir.col) || 1;
                    return (dRow * dir.row + dCol * dir.col) / (length * dirLength);
                };

                const getBlockedStamp = () => {
                    if (!blocked.size) {
                        return 'none';
                    }
                    return Array.from(blocked).sort().join('|');
                };

                const buildDashState = dir => {
                    const dashMax = Math.max(0, Math.floor(selectionMax));
                    const dashPath = [];
                    let endRow = helpers.center;
                    let endCol = helpers.center;
                    for (let step = 1; step <= dashMax; step++) {
                        const row = helpers.center + dir.row * step;
                        const col = helpers.center + dir.col * step;
                        if (!helpers.withinBounds(row, col)) {
                            break;
                        }
                        if (helpers.isBlocked(row, col)) {
                            break;
                        }
                        dashPath.push([row, col]);
                        endRow = row;
                        endCol = col;
                    }

                    const aoeMin = Math.max(0, Math.floor(aoeBounds.min));
                    const aoeMax = Math.max(0, Math.floor(aoeBounds.max));
                    const aoeCells = [];
                    if (aoeMode === 'standard') {
                        aoeCells.push(...helpers.cellsWithinRadius(endRow, endCol, aoeMax, aoeMin));
                    } else if (aoeMode === 'custom' && hasCustomPattern) {
                        let patternCells = orientOffsetsForDirection(customOffsets, dir);
                        patternCells = translateOffsets(endRow, endCol, patternCells, helpers.withinBounds);
                        aoeCells.push(...patternCells);
                    } else if (aoeMode === 'cone') {
                        aoeCells.push(...buildDirectionalConeCells(endRow, endCol, dir, aoeBounds.min, aoeBounds.max, helpers.withinBounds));
                    } else if (aoeMode === 'cross' || aoeMode === 'diagcross' || aoeMode === '8cross') {
                        const directions = aoeMode === 'cross'
                            ? CARDINAL_DIRECTIONS
                            : aoeMode === 'diagcross'
                                ? DIAGONAL_DIRECTIONS
                                : CARDINAL_DIRECTIONS.concat(DIAGONAL_DIRECTIONS);
                        directions.forEach(stepDir => {
                            const line = [];
                            for (let step = Math.max(0, aoeMin); step <= aoeMax; step++) {
                                const row = endRow + stepDir.row * step;
                                const col = endCol + stepDir.col * step;
                                if (!helpers.withinBounds(row, col)) {
                                    break;
                                }
                                if (step >= aoeMin) {
                                    line.push([row, col]);
                                }
                            }
                            aoeCells.push(...line);
                        });
                    } else {
                        if (aoeMin === 0 && aoeMax >= 0) {
                            aoeCells.push([endRow, endCol]);
                        }
                        for (let step = 1; step <= aoeMax; step++) {
                            const row = endRow + dir.row * step;
                            const col = endCol + dir.col * step;
                            if (!helpers.withinBounds(row, col)) {
                                break;
                            }
                            if (step >= aoeMin) {
                                aoeCells.push([row, col]);
                            }
                        }
                    }

                    const hitKeys = new Set();
                    const hitCells = [];
                    dashPath.concat(aoeCells).forEach(([row, col]) => {
                        const key = coordKey(row, col);
                        if (hitKeys.has(key)) {
                            return;
                        }
                        hitKeys.add(key);
                        hitCells.push([row, col]);
                    });

                    return {
                        dir,
                        hitCells,
                        hitKeys,
                        endRow,
                        endCol,
                        endKey: coordKey(endRow, endCol)
                    };
                };

                const getDashStates = () => {
                    const stamp = getBlockedStamp();
                    if (dashCache.stamp === stamp && dashCache.states) {
                        return dashCache.states;
                    }
                    const states = directionVectors.map(dir => buildDashState(dir));
                    dashCache.stamp = stamp;
                    dashCache.states = states;
                    return states;
                };

                const pickDashState = (row, col) => {
                    const key = coordKey(row, col);
                    const states = getDashStates();
                    const options = states.filter(state => state.hitKeys.has(key));
                    if (!options.length) {
                        return null;
                    }
                    if (options.length === 1) {
                        return options[0];
                    }
                    if (row === helpers.center && col === helpers.center) {
                        return options[0];
                    }
                    let best = options[0];
                    let bestScore = directionScore(best.dir, row, col);
                    for (let i = 1; i < options.length; i++) {
                        const score = directionScore(options[i].dir, row, col);
                        if (score > bestScore) {
                            bestScore = score;
                            best = options[i];
                        }
                    }
                    return best;
                };

                return {
                    summary: summaryParts.join(' · '),
                    isTargetable(row, col) {
                        if (!helpers.withinBounds(row, col)) {
                            return false;
                        }
                        return !!pickDashState(row, col);
                    },
                    aoeCells(row, col) {
                        const state = pickDashState(row, col);
                        if (!state) {
                            return [];
                        }
                        return state.hitCells.slice();
                    }
                };
            }

            const selectionCellsByDirection = [];
            const patternCellsByDirection = [];
            const reachableEntries = new Map();

            function registerReachableCell(row, col, entry) {
                if (!helpers.withinBounds(row, col)) {
                    return;
                }
                const key = coordKey(row, col);
                if (!reachableEntries.has(key)) {
                    reachableEntries.set(key, []);
                }
                reachableEntries.get(key).push(entry);
            }

            function selectionReachable(entry) {
                return helpers.pathClearBetween(helpers.center, helpers.center, entry.originRow, entry.originCol, true);
            }

            function canUseDashSelection(entry) {
                return selectionReachable(entry);
            }

            function canUseDashHit(entry, row, col) {
                if (!selectionReachable(entry)) {
                    return false;
                }
                if (helpers.isBlocked(entry.originRow, entry.originCol)) {
                    return false;
                }
                return helpers.pathClearBetween(entry.originRow, entry.originCol, row, col, true);
            }

            directionVectors.forEach((dir, dirIndex) => {
                const selections = buildDirectionalLineCells(helpers.center, helpers.center, dir, selectionMin, selectionMax, helpers.withinBounds);
                selectionCellsByDirection[dirIndex] = selections;

                if (hasCustomPattern) {
                    let patternCells = orientOffsetsForDirection(customOffsets, dir);
                    patternCells = translateOffsets(helpers.center, helpers.center, patternCells, helpers.withinBounds);
                    if (aoeExcludesSelf) {
                        patternCells = patternCells.filter(([row, col]) => !(row === helpers.center && col === helpers.center));
                    }
                    patternCellsByDirection[dirIndex] = patternCells;
                    patternCells.forEach(([row, col]) => {
                        registerReachableCell(row, col, {
                            kind: 'aoe',
                            variant: 'pattern',
                            dirIndex
                        });
                    });
                    return;
                }

                if (splashRadius > 0) {
                    selections.forEach(([row, col]) => {
                        const splashCells = helpers.cellsWithinRadius(row, col, splashRadius);
                        splashCells.forEach(([sRow, sCol]) => {
                            if (aoeExcludesSelf && sRow === helpers.center && sCol === helpers.center) {
                                return;
                            }
                            registerReachableCell(sRow, sCol, {
                                kind: 'aoe',
                                variant: 'splash',
                                dirIndex,
                                sourceRow: row,
                                sourceCol: col
                            });
                        });
                    });
                    patternCellsByDirection[dirIndex] = [];
                    return;
                }

                let patternCells = [];
                const patternOrigins = hasSelectionRange && selections.length
                    ? selections
                    : [[helpers.center, helpers.center]];
                if (dashLineMode) {
                    patternCellsByDirection[dirIndex] = [];
                    patternOrigins.forEach(([originRow, originCol]) => {
                        let originPattern = aoeMode === 'cone'
                            ? buildDirectionalConeCells(originRow, originCol, dir, coneMin, coneMax, helpers.withinBounds)
                            : buildDirectionalLineCells(originRow, originCol, dir, aoeBounds.min, aoeBounds.max, helpers.withinBounds);
                        if (originPattern.length > 1) {
                            const seen = new Set();
                            originPattern = originPattern.filter(([row, col]) => {
                                const key = coordKey(row, col);
                                if (seen.has(key)) {
                                    return false;
                                }
                                seen.add(key);
                                return true;
                            });
                        }
                        if (aoeExcludesSelf) {
                            originPattern = originPattern.filter(([row, col]) => !(row === helpers.center && col === helpers.center));
                        }
                        registerReachableCell(originRow, originCol, {
                            kind: 'selection',
                            variant: 'selection',
                            dirIndex,
                            originRow,
                            originCol,
                            patternCells: originPattern
                        });
                        originPattern.forEach(([row, col]) => {
                            registerReachableCell(row, col, {
                                kind: 'pattern',
                                variant: 'pattern',
                                dirIndex,
                                originRow,
                                originCol,
                                patternCells: originPattern
                            });
                        });
                    });
                    return;
                }
                if (aoeMode === 'cone') {
                    patternCells = patternOrigins.flatMap(([originRow, originCol]) =>
                        buildDirectionalConeCells(originRow, originCol, dir, coneMin, coneMax, helpers.withinBounds)
                    );
                } else {
                    patternCells = patternOrigins.flatMap(([originRow, originCol]) =>
                        buildDirectionalLineCells(originRow, originCol, dir, aoeBounds.min, aoeBounds.max, helpers.withinBounds)
                    );
                }
                if (patternCells.length > 1) {
                    const seen = new Set();
                    patternCells = patternCells.filter(([row, col]) => {
                        const key = coordKey(row, col);
                        if (seen.has(key)) {
                            return false;
                        }
                        seen.add(key);
                        return true;
                    });
                }
                if (aoeExcludesSelf) {
                    patternCells = patternCells.filter(([row, col]) => !(row === helpers.center && col === helpers.center));
                }
                patternCellsByDirection[dirIndex] = patternCells;
                if (directionOnlySelection) {
                    selections.forEach(([row, col]) => {
                        registerReachableCell(row, col, {
                            kind: 'aoe',
                            variant: 'pattern',
                            dirIndex
                        });
                    });
                    return;
                }
                patternCells.forEach(([row, col]) => {
                    registerReachableCell(row, col, {
                        kind: 'aoe',
                        variant: 'pattern',
                        dirIndex
                    });
                });
            });

            function directionSelectionFor(dirIndex) {
                const selections = selectionCellsByDirection[dirIndex] || [];
                for (let i = 0; i < selections.length; i++) {
                    const [row, col] = selections[i];
                    if (helpers.pathClear(row, col)) {
                        return { row, col };
                    }
                }
                return null;
            }

            function directionScoreForIndex(dirIndex, row, col) {
                const dir = directionVectors[dirIndex];
                if (!dir) {
                    return -Infinity;
                }
                const dRow = row - helpers.center;
                const dCol = col - helpers.center;
                const length = Math.hypot(dRow, dCol);
                if (!length) {
                    return -Infinity;
                }
                const dirLength = Math.hypot(dir.row, dir.col) || 1;
                return (dRow * dir.row + dCol * dir.col) / (length * dirLength);
            }

            function pickEntry(row, col) {
                const key = coordKey(row, col);
                const options = reachableEntries.get(key);
                if (!options) {
                    return null;
                }
                if (dashLineMode) {
                    for (const entry of options) {
                        if (entry.kind === 'selection' && canUseDashSelection(entry)) {
                            return entry;
                        }
                    }
                    for (const entry of options) {
                        if (entry.kind === 'pattern' && canUseDashHit(entry, row, col)) {
                            return entry;
                        }
                    }
                    return null;
                }
                const valid = [];
                for (const entry of options) {
                    if (entry.variant === 'splash') {
                        if (helpers.pathClear(entry.sourceRow, entry.sourceCol)) {
                            valid.push(entry);
                        }
                        continue;
                    }
                    if (directionSelectionFor(entry.dirIndex)) {
                        valid.push(entry);
                    }
                }
                if (!valid.length) {
                    return null;
                }
                if (!hasCustomPattern || valid.length === 1) {
                    return valid[0];
                }
                let best = valid[0];
                let bestScore = directionScoreForIndex(best.dirIndex, row, col);
                for (let i = 1; i < valid.length; i++) {
                    const entry = valid[i];
                    const score = directionScoreForIndex(entry.dirIndex, row, col);
                    if (score > bestScore) {
                        bestScore = score;
                        best = entry;
                    }
                }
                return best;
            }

            function buildSplashCells(row, col) {
                const splash = helpers.cellsWithinRadius(row, col, splashRadius);
                return maybeExcludeSelfCells(splash, helpers, aoeExcludesSelf);
            }

            return {
                summary: summaryParts.join(' · '),
                isTargetable(row, col) {
                    if (!helpers.withinBounds(row, col)) {
                        return false;
                    }
                    return !!pickEntry(row, col);
                },
                aoeCells(row, col) {
                    const entry = pickEntry(row, col);
                    if (!entry) {
                        return [];
                    }
                    if (dashLineMode) {
                        if (entry.kind === 'selection') {
                            if (helpers.isBlocked(entry.originRow, entry.originCol)) {
                                return [[entry.originRow, entry.originCol]];
                            }
                            const cells = entry.patternCells ? entry.patternCells.slice() : [];
                            if (helpers.withinBounds(entry.originRow, entry.originCol)) {
                                cells.push([entry.originRow, entry.originCol]);
                            }
                            if (cells.length > 1) {
                                const seen = new Set();
                                return cells.filter(([cellRow, cellCol]) => {
                                    const cellKey = coordKey(cellRow, cellCol);
                                    if (seen.has(cellKey)) {
                                        return false;
                                    }
                                    seen.add(cellKey);
                                    return true;
                                });
                            }
                            return cells;
                        }
                        const cells = entry.patternCells ? entry.patternCells.slice() : [];
                        if (helpers.withinBounds(entry.originRow, entry.originCol)) {
                            cells.push([entry.originRow, entry.originCol]);
                        }
                        if (cells.length > 1) {
                            const seen = new Set();
                            return cells.filter(([cellRow, cellCol]) => {
                                const cellKey = coordKey(cellRow, cellCol);
                                if (seen.has(cellKey)) {
                                    return false;
                                }
                                seen.add(cellKey);
                                return true;
                            });
                        }
                        return cells;
                    }
                    if (entry.variant === 'splash') {
                        const sourceRow = entry.sourceRow;
                        const sourceCol = entry.sourceCol;
                        if (typeof sourceRow !== 'number' || typeof sourceCol !== 'number') {
                            return [];
                        }
                        return buildSplashCells(sourceRow, sourceCol);
                    }
                    const pattern = patternCellsByDirection[entry.dirIndex] || [];
                    return pattern.slice();
                }
            };
        }

        function numberFrom(value) {
            const evaluated = evaluateExpression(value);
            if (typeof evaluated === 'number' && !Number.isNaN(evaluated)) {
                return evaluated;
            }
            if (typeof value !== 'string') {
                return null;
            }
            const match = value.match(/-?\d+/);
            return match ? parseInt(match[0], 10) : null;
        }

        function listFrom(value) {
            if (Array.isArray(value)) {
                return value;
            }
            if (typeof value === 'string' && value.trim()) {
                return [value.trim()];
            }
            return [];
        }

        function asBoolean(value) {
            if (typeof value === 'boolean') {
                return value;
            }
            if (typeof value === 'string') {
                return value.toLowerCase() === 'true' || value === '1';
            }
            return false;
        }

        function formatRangeLabel(rawMin, rawMax, numericMin, numericMax, fallbackMax) {
            const minLabel = displayValue(rawMin, numericMin);
            const maxLabel = displayValue(rawMax, numericMax !== null ? numericMax : fallbackMax);
            return minLabel === maxLabel ? minLabel : `${minLabel}–${maxLabel}`;
        }

        function displayValue(raw, fallback) {
            if (typeof raw === 'string' && raw.trim()) {
                return raw.trim();
            }
            if (typeof fallback === 'number') {
                return String(fallback);
            }
            return '?';
        }

        function formatStepRange(min, max) {
            if (min === max) {
                return String(min);
            }
            return `${min}–${max}`;
        }

        return {
            init,
            render,
            refreshCopy,
            clearHover: clearHoverHighlights
        };
    };
})();
