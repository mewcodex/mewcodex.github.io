(function () {
    const COMMON_UI_TEXT = {
        en: {
            navAbilities: 'Abilities',
            navItems: 'Items',
            navPassives: 'Passives',
            navMutations: 'Mutations',
            navAchievements: 'Achievements',
            navEvents: 'Events',
            navCharacters: 'Characters',
            languageLabel: 'Language:',
            languageEnglish: 'English',
            languageChinese: 'Chinese',
            showHidden: 'Show Hidden',
            footerCredit: 'Original game by Edmund McMillen and Tyler Glaiel.',
            footerAuthor: 'Created by: Bilibili@Alriph',
            footerTranslator: 'Chinese translation: Bilibili@地下丝绒和妮可',
            footerTools: 'Tools used: mewgpaks, JPEXS FFDec',
            announcementButton: 'Announcement',
            announcementTitle: 'Announcement',
            announcementBody: 'Placeholder announcement.',
        },
        zh: {
            navAbilities: '能力',
            navItems: '物品',
            navPassives: '被动',
            navMutations: '突变',
            navAchievements: '成就',
            navEvents: '事件',
            navCharacters: '角色',
            languageLabel: '语言：',
            languageEnglish: '英语',
            languageChinese: '中文',
            showHidden: '显示隐藏项',
            footerCredit: '原作游戏作者：Edmund McMillen 与 Tyler Glaiel。',
            footerAuthor: '制作：Bilibili@Alriph',
            footerTranslator: '中文翻译：Bilibili@地下丝绒和妮可',
            footerTools: '工具：mewgpaks，JPEXS FFDec',
            announcementButton: '公告',
            announcementTitle: '公告',
            announcementBody: '公告占位符。',
        }
    };

    function initLanguage(defaultLang) {
        const fallback = defaultLang || 'en';
        const urlLang = window.getUrlParameter ? getUrlParameter('lang') : null;
        if (urlLang === 'zh' || urlLang === 'en') {
            window.currentLanguage = urlLang;
        } else if (!window.currentLanguage) {
            window.currentLanguage = fallback;
        }
        return window.currentLanguage;
    }

    function createTranslator(uiText) {
        return function t(key) {
            const lang = window.currentLanguage || 'en';
            return (uiText[lang] && uiText[lang][key])
                || (uiText.en && uiText.en[key])
                || key;
        };
    }

    function setLanguage(lang, onChange) {
        if (!lang || lang === window.currentLanguage) {
            return;
        }
        window.currentLanguage = lang;
        if (window.setUrlParameter) {
            setUrlParameter('lang', lang);
        }
        if (typeof onChange === 'function') {
            onChange(lang);
        }
    }

    function mergeUiText(baseText, pageText) {
        return {
            en: Object.assign({}, baseText && baseText.en, pageText && pageText.en),
            zh: Object.assign({}, baseText && baseText.zh, pageText && pageText.zh),
        };
    }

    window.initLanguage = initLanguage;
    window.createTranslator = createTranslator;
    window.codexSetLanguage = setLanguage;
    window.COMMON_UI_TEXT = COMMON_UI_TEXT;
    window.mergeUiText = mergeUiText;
})();
