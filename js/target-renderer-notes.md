# Target Renderer Rules (Current Behavior)

This document describes how the ability target renderer currently interprets target block keywords and computes range/aoe/LOS. It reflects the current logic in target-renderer.js and is intended as a reference for later tuning.

## File and entry point
- Source: js/target-renderer.js
- Entry: createTargetRenderer() -> render(targetText)

## Parsing
- The target block is parsed line-by-line. Each non-empty line is split at the first space into key/value.
- Values in [ ... ] become a token array. Everything else is a raw string.
- Unknown keys are stored but ignored unless explicitly used.

## Variables and expressions
- Numeric fields accept arithmetic expressions (e.g. "3+bonus_range").
- Variable names are replaced with slider values (default 0), except "size" which is forced to 1 and not user-adjustable.
- Percent values (e.g. "50%") are parsed as 0.5.
- If the expression contains non-numeric symbols, it fails and returns null.

## Grid basics
- 15x15 grid, origin is the center cell.
- Obstacles can be toggled by clicking cells.
- Obstacles only block line-of-sight checks. They do not block range by themselves.

## target_mode
### none
- Treated as self-cast.
- Targetable tile is only the origin.
- AoE can still be shown using aoe_mode + min_aoe/max_aoe.

### tile
- Uses min_range/max_range and range_mode to determine selectable tiles.
- Range distance:
  - range_mode "diagcross": diagonal-only steps. Distance = |drow| == |dcol|. Min range is at least 1 unless min_range is 0 and must_move is false.
  - range_mode "cross": orthogonal-only. Distance = |drow|+|dcol|.
  - range_mode "8cross": orthogonal + diagonal lines. Distance = max(|drow|, |dcol|) when on a line.
  - range_mode "square": Chebyshev distance.
  - range_mode "custom": uses custom_range offsets (optionally range_symmetry).
  - default/other: Manhattan distance.
- must_move: if true, the origin is not a valid target.
- must_be_moveable (in restrictions): blocked tiles are not valid targets.
- must_fit_2x2_character (in restrictions): origin must allow a 2x2 footprint without blocked tiles.
- Line-of-sight (LOS):
  - LOS is required if any of these are true:
    - straight_shot == true
    - requires_line_of_sight == true
    - restrictions includes: requires_line_of_sight / needs_los / line_of_sight / must_have_line_of_sight
    - aoe_restrictions includes: requires_line_of_sight / needs_los / line_of_sight / must_have_line_of_sight / must_have_line_of_sight_unpurgable
- range_display_include_aoe (tile + custom aoe): all hittable tiles are selectable; hover prefers the AoE originating from the hovered tile when possible.

### direction / direction8
- Directional selection mode. direction8 allows diagonals, direction only allows cardinal directions.
- Selection range is ignored for direction + line/cone; selection uses the AoE bounds instead.
- Line-of-sight is always enforced for direction selections (uses pathClear on the line to the selection).
- AoE pattern is evaluated per direction. If a selection range is explicitly present, the line/cone AoE starts at each selection origin; otherwise it starts at the center.
- aoe_mode "all" overrides directional targeting and shows full-grid AoE (origin-only selectable).
- Dash-attack (template dash_attack):
  - Only direction + selection range uses dash logic.
  - Dash path stops before the first blocked tile.
  - Hit area = dash track (excluding origin) + AoE shape from the dash endpoint.
  - Hover/selection considers any hit cell targetable; direction ties pick the closest directional match.

## aoe_mode (tile mode)
- standard (default): radius using Manhattan distance (min_aoe/max_aoe).
- cross: plus-shaped lines from the target (orthogonal only).
- diagcross: X-shaped lines from the target (diagonal only).
- 8cross: plus + X combined (orthogonal + diagonal lines).
- perpline: builds a perpendicular line through the target based on direction from the origin.
- custom: uses custom_aoe offsets, optionally oriented by direction.
- all: highlights the entire grid (respects aoe_excludes_self).

## aoe_mode (direction mode)
- line (default): a straight line in the chosen direction, with min_aoe/max_aoe as line length bounds.
- cone: a forward cone expanding with distance.
- custom: uses custom_aoe offsets oriented to the chosen direction.
- Splash radius:
  - If aoe_radius / max_aoe_radius / max_area is set, a radius AoE is used around the selected line cell.

## AoE helpers
- min_aoe / max_aoe: numeric bounds for AoE range or line length.
- aoe_excludes_self: removes the origin from AoE cells.
- dont_orient_aoe (tile only): if true, custom_aoe offsets are not rotated.
- custom_aoe: list of [row, col] offset pairs.
- aoe_symmetry: none (default), four_way, eight_way. Applied to custom_aoe offsets.
- custom_range: list of [row, col] offset pairs used when range_mode is custom.
- range_symmetry: none (default), four_way, eight_way. Applied to custom_range offsets.

## LOS and obstacles
- LOS uses a line trace and checks if any blocked cell intersects the line segment (excluding the target cell itself).
- LOS is used in:
  - tile mode when requiresLine is true
  - direction mode for selection and splash sources
- aoe_restrictions is only used for LOS gating (must_have_line_of_sight, must_have_line_of_sight_unpurgable).

## Keys currently ignored by the renderer
These keys appear in data but are not used by the renderer yet:
- aoe_considers_character_size
- range_display_include_character_size
- allow_diagonals
- shotgun_mode
- knockback_mode
- can_multihit
- target_mode-specific gameplay effects (teleport, dash, etc)

## Summary of important control flow
1. Parse target block -> entries/meta
2. Choose scenario by target_mode
3. Build targetable cells + AoE cells
4. Apply LOS checks if required
5. Render selectable tiles and AoE highlights

## Notes
- Direction mode currently treats selection lines as LOS-required in all cases.
- Tile mode ignores as_the_crow_flies for LOS checks.
- Hover rendering: if the selected tile is not hit by AoE, only a border is shown (no fill).
- Warning banner appears when the target block includes likely unsupported keys/restrictions.
