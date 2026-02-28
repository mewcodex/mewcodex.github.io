(function () {
    function parseJsonWithFallback(text, label) {
        try {
            return JSON.parse(text);
        } catch (error) {
            const sanitized = text.replace(/\\u(?![0-9a-fA-F]{4})/g, '\\\\u');
            if (sanitized !== text) {
                try {
                    console.warn(`Recovered JSON parse error in ${label || 'response'}.`);
                    return JSON.parse(sanitized);
                } catch (sanitizedError) {
                    console.error('Fallback JSON parse failed:', sanitizedError);
                }
            }
            throw error;
        }
    }

    async function fetchJsonWithFallback(url, label) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        return parseJsonWithFallback(text, label || url);
    }
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
        setLink('navWeather', `weather.html${lang}`);
        setLink('navKeywords', `keywords.html${lang}`);
        setLink('navFurniture', `furniture.html${lang}`);
        setLink('navMutations', `mutations.html${lang}`);
        setLink('navAchievements', `achievements.html${lang}`);
        setLink('navCharacters', `characters.html${lang}`);
        setLink('navEvents', `events.html${lang}`);
        setLink('navItemSet', `item_set_quick.html${lang}`);
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
    window.fetchJsonWithFallback = fetchJsonWithFallback;
})();
