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
            .navbar .nav-dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                min-width: 220px;
                background: #6d6559;
                border: 1px solid rgba(0, 0, 0, 0.25);
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
                z-index: 20;
            }
            .navbar .nav-dropdown:hover .nav-dropdown-menu,
            .navbar .nav-dropdown.open .nav-dropdown-menu {
                display: block;
            }
            .navbar .nav-dropdown-menu a {
                display: block;
                padding: 10px 16px;
                color: rgba(255, 255, 255, 0.9);
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .navbar .nav-dropdown-menu a:hover {
                background: rgba(255, 255, 255, 0.12);
                color: white;
            }
            .navbar .nav-dropdown-menu a.active {
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
            { key: 'mutations', id: 'navMutations', href: 'mutations.html', label: 'Mutations' },
            { key: 'characters', id: 'navCharacters', href: 'characters.html', label: 'Characters' }
        ];

        const nav = document.createElement('div');
        nav.className = 'navbar';
        navItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;
            link.id = item.id;
            link.textContent = item.label;
            if (item.key === activeKey) {
                link.classList.add('active');
            }
            nav.appendChild(link);
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

        const menu = document.createElement('div');
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
        dropdown.appendChild(menu);
        nav.appendChild(dropdown);

        target.innerHTML = '';
        target.appendChild(nav);

        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = dropdown.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        if (!window.__codexNavbarDropdownBound) {
            window.__codexNavbarDropdownBound = true;
            document.addEventListener('click', (event) => {
                const openDropdown = document.querySelector('.nav-dropdown.open');
                if (!openDropdown) {
                    return;
                }
                if (openDropdown.contains(event.target)) {
                    return;
                }
                openDropdown.classList.remove('open');
                const btn = openDropdown.querySelector('.nav-dropdown-toggle');
                if (btn) {
                    btn.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key !== 'Escape') {
                    return;
                }
                const openDropdown = document.querySelector('.nav-dropdown.open');
                if (!openDropdown) {
                    return;
                }
                openDropdown.classList.remove('open');
                const btn = openDropdown.querySelector('.nav-dropdown-toggle');
                if (btn) {
                    btn.setAttribute('aria-expanded', 'false');
                    btn.focus();
                }
            });
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
