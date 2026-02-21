(function () {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function setUrlParameter(name, value) {
        const url = new URL(window.location);
        url.searchParams.set(name, value);
        window.history.replaceState({}, '', url);
    }

    function updateNavbarLinks() {
        const currentLanguage = window.currentLanguage || 'en';
        const lang = currentLanguage !== 'en' ? `?lang=${currentLanguage}` : '';
        const setLink = (id, href) => {
            const el = document.getElementById(id);
            if (el) {
                el.href = href;
            }
        };
        setLink('navAbilities', `index.html${lang}`);
        setLink('navPassives', `passives.html${lang}`);
        setLink('navItems', `items.html${lang}`);
        setLink('navMutations', `mutations.html${lang}`);
        setLink('navAchievements', `achievements.html${lang}`);
        setLink('navCharacters', `characters.html${lang}`);
    }

    function getLocalizedText(texts, fallback) {
        if (!texts || typeof texts !== 'object') {
            return fallback || '';
        }
        return texts[window.currentLanguage] || fallback || '';
    }

    function escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    function mapFontIconName(iconName) {
        const iconMap = { con: 'constitution' };
        return iconMap[iconName] || iconName;
    }

    window.getUrlParameter = getUrlParameter;
    window.setUrlParameter = setUrlParameter;
    window.updateNavbarLinks = updateNavbarLinks;
    window.getLocalizedText = getLocalizedText;
    window.escapeHtml = escapeHtml;
    window.mapFontIconName = mapFontIconName;
})();
