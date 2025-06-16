let currentLanguage = localStorage.getItem('language') || 'fr';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateFlag();
}

function updateFlag() {
    document.getElementById('fr-flag').classList.toggle('active', currentLanguage === 'fr');
    document.getElementById('en-flag').classList.toggle('active', currentLanguage === 'en');
}

function getTranslation(key, obj) {
    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
        value = value[k];
    }
    return value;
}

function updateContent() {
    const translation = translations[currentLanguage];
    
    // Update navigation and text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key, translation);
    });

    // Update skills
    document.querySelectorAll('[data-skills]').forEach(element => {
        const key = element.getAttribute('data-skills');
        const skills = getTranslation(key, translation);
        element.innerHTML = skills.map(skill => `<span class="skill-item">${skill}</span>`).join('');
    });

    // Update meta tags
    document.title = currentLanguage === 'fr' ? 
        'Gueguen Yann - Portfolio' : 
        'Gueguen Yann - Portfolio';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});
