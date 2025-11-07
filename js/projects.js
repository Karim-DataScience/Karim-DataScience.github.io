const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const projectsGrid = document.getElementById('projectsGrid');

let currentFilter = 'all';

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentFilter = button.getAttribute('data-filter');
        filterProjects();
    });
});

searchInput.addEventListener('input', (e) => {
    filterProjects();
});

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const tags = card.getAttribute('data-tags').toLowerCase();

        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        const matchesSearch = searchTerm === '' || tags.includes(searchTerm);

        if (matchesFilter && matchesSearch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
        projectsGrid.style.display = 'none';
    } else {
        noResults.classList.add('hidden');
        projectsGrid.style.display = 'grid';
    }
}

filterProjects();
