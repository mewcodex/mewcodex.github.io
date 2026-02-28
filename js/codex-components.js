(function () {
    function ensureNavbarStyles() {
        if (document.getElementById('codexNavbarDropdownStyles')) {
            return;
        }
        const style = document.createElement('style');
        style.id = 'codexNavbarDropdownStyles';
        style.textContent = `
            .navbar .nav-dropdown {
                position: relative;
                display: flex;
            }
            .navbar {
                overflow: visible;
            }
            .navbar .navbar-inner {
                display: flex;
                overflow-x: auto;
                overflow-y: visible;
                -webkit-overflow-scrolling: touch;
            }
            .navbar .nav-dropdown-toggle {
                display: inline-flex;
                align-items: center;
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.9);
                cursor: pointer;
                padding: 14px 32px;
                font-size: 1em;
                font-weight: 500;
                border-bottom: 3px solid transparent;
                text-shadow: inherit;
                transition: all 0.2s;
            }
            .navbar .nav-dropdown-caret {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 18px;
                height: 18px;
                margin-left: 8px;
                color: white;
                font-size: 1.5em;
                line-height: 1;
            }
            .navbar .nav-dropdown-toggle:hover,
            .navbar .nav-dropdown.open .nav-dropdown-toggle,
            .navbar .nav-dropdown-toggle.active {
                background: rgba(255, 255, 255, 0.15);
                color: white;
            }
            .nav-dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                min-width: 220px;
                background: #6d6559;
                border: 1px solid rgba(0, 0, 0, 0.25);
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
                z-index: 2000;
            }
            .nav-dropdown-menu.open {
                display: block;
            }
            .nav-dropdown-menu a {
                display: block;
                padding: 10px 16px;
                color: rgba(255, 255, 255, 0.9);
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .nav-dropdown-menu a:hover {
                background: rgba(255, 255, 255, 0.12);
                color: white;
            }
            .nav-dropdown-menu a.active {
                background: rgba(255, 255, 255, 0.18);
                color: white;
            }
        `;
        document.head.appendChild(style);
    }

    function renderNavbar(targetId, activeKey) {
        const target = document.getElementById(targetId);
        if (!target) {
            return;
        }

        ensureNavbarStyles();

        const navItems = [
            { key: 'abilities', id: 'navAbilities', href: 'index.html', label: 'Abilities' },
            { key: 'passives', id: 'navPassives', href: 'passives.html', label: 'Passives' },
            { key: 'items', id: 'navItems', href: 'items.html', label: 'Items' },
            { key: 'events', id: 'navEvents', href: 'events.html', label: 'Events' },
            { key: 'furniture', id: 'navFurniture', href: 'furniture.html', label: 'Furniture' }
        ];

        const miscItems = [
            { key: 'item-set', id: 'navItemSet', href: 'item_set_quick.html', label: 'Item Set' },
            { key: 'achievements', id: 'navAchievements', href: 'achievements.html', label: 'Achievements' },
            { key: 'weather', id: 'navWeather', href: 'weather.html', label: 'Weather' },
            { key: 'keywords', id: 'navKeywords', href: 'keywords.html', label: 'Keywords' },
            { key: 'mutations', id: 'navMutations', href: 'mutations.html', label: 'Mutations' },
            { key: 'characters', id: 'navCharacters', href: 'characters.html', label: 'Characters' }
        ];

        const nav = document.createElement('div');
        nav.className = 'navbar';
        const navInner = document.createElement('div');
        navInner.className = 'navbar-inner';
        navItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;
            link.id = item.id;
            link.textContent = item.label;
            if (item.key === activeKey) {
                link.classList.add('active');
            }
            navInner.appendChild(link);
        });

        const miscActive = miscItems.some(item => item.key === activeKey);
        const dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.id = 'navMisc';
        toggle.className = 'nav-dropdown-toggle';
        const toggleLabel = document.createElement('span');
        toggleLabel.className = 'nav-dropdown-label';
        toggleLabel.textContent = 'Misc';
        const toggleCaret = document.createElement('span');
        toggleCaret.className = 'nav-dropdown-caret';
        toggleCaret.textContent = '▾';
        toggle.append(toggleLabel, toggleCaret);
        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        if (miscActive) {
            toggle.classList.add('active');
        }

        let menu = document.getElementById('navMiscMenu');
        if (menu) {
            menu.remove();
        }
        menu = document.createElement('div');
        menu.id = 'navMiscMenu';
        menu.className = 'nav-dropdown-menu';
        menu.setAttribute('role', 'menu');

        miscItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;
            link.id = item.id;
            link.textContent = item.label;
            link.setAttribute('role', 'menuitem');
            if (item.key === activeKey) {
                link.classList.add('active');
            }
            menu.appendChild(link);
        });

        dropdown.appendChild(toggle);
        document.body.appendChild(menu);
        navInner.appendChild(dropdown);
        nav.appendChild(navInner);

        target.innerHTML = '';
        target.appendChild(nav);

        const positionMenu = () => {
            const rect = toggle.getBoundingClientRect();
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            const menuWidth = rect.width;
            const viewportRight = scrollX + window.innerWidth - 8;
            let left = rect.left + scrollX;
            const maxLeft = viewportRight - menuWidth;
            if (left > maxLeft) {
                left = Math.max(scrollX + 8, maxLeft);
            }
            menu.style.top = `${rect.bottom + scrollY}px`;
            menu.style.left = `${left}px`;
            menu.style.width = `${menuWidth}px`;
            menu.style.minWidth = `${menuWidth}px`;
        };

        const openMenu = () => {
            dropdown.classList.add('open');
            menu.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            positionMenu();
        };

        const closeMenu = () => {
            dropdown.classList.remove('open');
            menu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            if (menu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        let hoverCloseTimer;
        const scheduleClose = () => {
            window.clearTimeout(hoverCloseTimer);
            hoverCloseTimer = window.setTimeout(() => {
                if (!menu.matches(':hover') && !toggle.matches(':hover')) {
                    closeMenu();
                }
            }, 120);
        };
        toggle.addEventListener('mouseenter', openMenu);
        toggle.addEventListener('mouseleave', scheduleClose);
        menu.addEventListener('mouseenter', openMenu);
        menu.addEventListener('mouseleave', scheduleClose);

        if (!window.__codexNavbarDropdownBound) {
            window.__codexNavbarDropdownBound = true;
            document.addEventListener('click', (event) => {
                const openMenuEl = document.querySelector('.nav-dropdown-menu.open');
                if (!openMenuEl) {
                    return;
                }
                if (openMenuEl.contains(event.target) || toggle.contains(event.target)) {
                    return;
                }
                closeMenu();
            });
            document.addEventListener('keydown', (event) => {
                if (event.key !== 'Escape') {
                    return;
                }
                const openMenuEl = document.querySelector('.nav-dropdown-menu.open');
                if (!openMenuEl) {
                    return;
                }
                closeMenu();
                toggle.focus();
            });
            window.addEventListener('resize', () => {
                if (menu.classList.contains('open')) {
                    positionMenu();
                }
            });
            window.addEventListener('scroll', () => {
                if (menu.classList.contains('open')) {
                    positionMenu();
                }
            }, true);
        }

        if (typeof updateNavbarLinks === 'function') {
            updateNavbarLinks();
        }
    }

    function renderPager(targetId, suffix) {
        const target = document.getElementById(targetId);
        if (!target) {
            return;
        }

        const suffixText = suffix || '';
        target.innerHTML = `
            <div class="pagination-controls">
                <div class="pagination-controls-inner">
                    <button type="button" id="pagePrev${suffixText}">Prev</button>
                    <span id="pageInfo${suffixText}">1 / 1</span>
                    <button type="button" id="pageNext${suffixText}">Next</button>
                    <span id="pageSizeLabel${suffixText}">Per page</span>
                    <select id="pageSizeSelect${suffixText}">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50" selected>50</option>
                        <option value="100">100</option>
                        <option value="0" id="pageSizeAll${suffixText}">All</option>
                    </select>
                </div>
            </div>
        `;
    }

    window.renderNavbar = renderNavbar;
    window.renderPager = renderPager;
})();
