(function () {
    const SEEN_KEY_FALLBACK = 'codexAnnouncementSeen_v1';

    function escapeHtmlLocal(text) {
        if (!text) {
            return '';
        }
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, ch => map[ch]);
    }

    function getSeenKey() {
        return window.ANNOUNCEMENT_SEEN_KEY || SEEN_KEY_FALLBACK;
    }

    function getCurrentLanguage() {
        return window.currentLanguage || 'en';
    }

    function openAnnouncement() {
        const modal = document.getElementById('announcementModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    function closeAnnouncement() {
        const modal = document.getElementById('announcementModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    function maybeShowAnnouncement() {
        try {
            if (!localStorage.getItem(getSeenKey())) {
                openAnnouncement();
                localStorage.setItem(getSeenKey(), '1');
            }
        } catch (error) {
            openAnnouncement();
        }
    }

    function updateAnnouncementLanguageButtons() {
        const lang = getCurrentLanguage();
        const enButton = document.getElementById('announcementLangEn');
        const zhButton = document.getElementById('announcementLangZh');
        if (enButton) {
            enButton.classList.toggle('active', lang === 'en');
        }
        if (zhButton) {
            zhButton.classList.toggle('active', lang === 'zh');
        }
    }

    async function loadAnnouncementContent() {
        const body = document.getElementById('announcementBody');
        if (!body) {
            return;
        }
        const lang = getCurrentLanguage();
        const primary = `announcement_${lang}.md`;
        const fallback = 'announcement_en.md';
        let markdown = '';

        try {
            const response = await fetch(primary);
            if (response.ok) {
                markdown = await response.text();
            }
        } catch (error) {
            markdown = '';
        }

        if (!markdown) {
            try {
                const response = await fetch(fallback);
                if (response.ok) {
                    markdown = await response.text();
                }
            } catch (error) {
                markdown = '';
            }
        }

        if (!markdown) {
            const fallbackText = typeof window.t === 'function' ? window.t('announcementBody') : '';
            if (typeof window.parseRichText === 'function') {
                body.innerHTML = window.parseRichText(fallbackText);
            } else {
                body.textContent = fallbackText;
            }
            return;
        }

        body.innerHTML = parseAnnouncementMarkdown(markdown);
    }

    function parseAnnouncementMarkdown(text) {
        if (!text) {
            return '';
        }
        const escape = typeof window.escapeHtml === 'function' ? window.escapeHtml : escapeHtmlLocal;
        const safe = escape(text).replace(/\r\n/g, '\n');
        const chunks = safe.split(/```/);
        let html = '';

        chunks.forEach((chunk, index) => {
            if (index % 2 === 1) {
                html += `<pre><code>${chunk.trim()}</code></pre>`;
                return;
            }
            html += renderMarkdownBlock(chunk);
        });

        return html;
    }

    function renderMarkdownBlock(block) {
        const lines = block.split('\n');
        let html = '';
        const listStack = [];
        const openListItem = [];

        const getIndentLevel = raw => {
            let count = 0;
            for (let i = 0; i < raw.length; i += 1) {
                const ch = raw[i];
                if (ch === ' ') {
                    count += 1;
                } else if (ch === '\t') {
                    count += 2;
                } else {
                    break;
                }
            }
            return Math.floor(count / 2);
        };

        const closeListItem = level => {
            if (openListItem[level]) {
                html += '</li>';
                openListItem[level] = false;
            }
        };

        const closeListsTo = level => {
            for (let i = listStack.length - 1; i >= level; i -= 1) {
                closeListItem(i);
                html += `</${listStack[i]}>`;
                listStack.pop();
                openListItem.pop();
            }
        };

        const ensureListAtLevel = (level, type) => {
            if (listStack.length > level + 1) {
                closeListsTo(level + 1);
            }

            if (listStack.length === level + 1 && listStack[level] !== type) {
                closeListsTo(level);
            }

            while (listStack.length < level + 1) {
                if (listStack.length > 0 && !openListItem[listStack.length - 1]) {
                    html += '<li>';
                    openListItem[listStack.length - 1] = true;
                }
                html += `<${type}>`;
                listStack.push(type);
                openListItem.push(false);
            }
        };

        lines.forEach(line => {
            const headingMatch = line.match(/^\s*(#{1,6})\s+(.*)$/);
            if (headingMatch) {
                closeListsTo(0);
                const level = headingMatch[1].length;
                html += `<h${level}>${renderMarkdownInline(headingMatch[2])}</h${level}>`;
                return;
            }

            const unorderedMatch = line.match(/^(\s*)[-*]\s+(.*)$/);
            const orderedMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);
            if (unorderedMatch || orderedMatch) {
                const type = unorderedMatch ? 'ul' : 'ol';
                const indentSource = unorderedMatch ? unorderedMatch[1] : orderedMatch[1];
                const itemText = unorderedMatch ? unorderedMatch[2] : orderedMatch[2];
                let level = getIndentLevel(indentSource);

                if (level > listStack.length) {
                    level = listStack.length;
                }

                ensureListAtLevel(level, type);

                if (openListItem[level]) {
                    closeListItem(level);
                }

                html += `<li>${renderMarkdownInline(itemText)}`;
                openListItem[level] = true;
                return;
            }

            if (!line.trim()) {
                closeListsTo(0);
                return;
            }

            closeListsTo(0);
            html += `<p>${renderMarkdownInline(line)}</p>`;
        });

        closeListsTo(0);
        return html;
    }

    function renderMarkdownInline(text) {
        if (!text) {
            return '';
        }
        let html = text;
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        return html;
    }

    function initAnnouncement() {
        const root = document.body;
        if (root && root.dataset.announcementInit === '1') {
            return;
        }
        if (root) {
            root.dataset.announcementInit = '1';
        }

        const modal = document.getElementById('announcementModal');
        if (modal) {
            modal.addEventListener('click', event => {
                if (event.target === modal) {
                    closeAnnouncement();
                }
            });
        }

        const button = document.getElementById('announcementButton');
        if (button) {
            button.addEventListener('click', openAnnouncement);
        }

        const closeButton = document.getElementById('announcementClose');
        if (closeButton) {
            closeButton.addEventListener('click', closeAnnouncement);
        }

        const langEn = document.getElementById('announcementLangEn');
        const langZh = document.getElementById('announcementLangZh');
        if (typeof window.setLanguage === 'function') {
            if (langEn) {
                langEn.addEventListener('click', () => window.setLanguage('en'));
            }
            if (langZh) {
                langZh.addEventListener('click', () => window.setLanguage('zh'));
            }
        }
    }

    window.openAnnouncement = openAnnouncement;
    window.closeAnnouncement = closeAnnouncement;
    window.maybeShowAnnouncement = maybeShowAnnouncement;
    window.updateAnnouncementLanguageButtons = updateAnnouncementLanguageButtons;
    window.loadAnnouncementContent = loadAnnouncementContent;
    window.parseAnnouncementMarkdown = parseAnnouncementMarkdown;
    window.renderMarkdownInline = renderMarkdownInline;
    window.initAnnouncement = initAnnouncement;
})();
