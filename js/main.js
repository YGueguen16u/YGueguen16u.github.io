// Fonction pour afficher les projets
function displayProjects() {
    const projectsContainer = document.querySelector('.projects_content');
    if (!projectsContainer) return;

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="project-link">Voir sur GitHub</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Fonction pour afficher les compétences
function displaySkills() {
    const skillsContainer = document.querySelector('.skills_content');
    if (!skillsContainer) return;

    skills.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skills-category';
        categoryElement.innerHTML = `
            <h3>${category.category}</h3>
            <div class="skills-list">
                ${category.items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(categoryElement);
    });
}

// Animation au défilement
function handleScroll() {
    const elements = document.querySelectorAll('.in_animation');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    displaySkills();
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Pour les éléments visibles au chargement
});
