// Set default language
let currentLanguage = 'es';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateLanguageButtons();
});

function toggleLanguage(lang) {
    currentLanguage = lang;
    setLanguage(lang);
    updateLanguageButtons();
}

function setLanguage(lang) {
    // Hide all language elements first
    document.querySelectorAll('[data-lang-es], [data-lang-en]').forEach(el => {
        el.classList.remove('active');
    });

    // Show elements for selected language
    document.querySelectorAll(`[data-lang-${lang}]`).forEach(el => {
        el.classList.add('active');
    });
}

function updateLanguageButtons() {
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}