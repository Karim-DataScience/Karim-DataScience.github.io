// Filtrer les compétences
const filterInput = document.getElementById('filter-input');
const skillsList = document.getElementById('skills-list');

filterInput.addEventListener('input', () => {
  const filterTerm = filterInput.value.toLowerCase();
  const skills = skillsList.getElementsByTagName('li');

  Array.from(skills).forEach(skill => {
    const text = skill.textContent.toLowerCase();
    if (text.includes(filterTerm)) {
      skill.style.display = 'block';
    } else {
      skill.style.display = 'none';
    }
  });
});

// Trier les projets
const sortSelect = document.getElementById('sort-select');
const projectsList = document.getElementById('projects-list');

sortSelect.addEventListener('change', () => {
  const sortTerm = sortSelect.value;
  const projects = projectsList.getElementsByTagName('li');

  Array.from(projects)
    .sort((a, b) => {
      const aTitle = a.querySelector('.project-title').textContent;
      const bTitle = b.querySelector('.project-title').textContent;

      if (sortTerm === 'title-asc') {
        return aTitle.localeCompare(bTitle);
      } else if (sortTerm === 'title-desc') {
        return bTitle.localeCompare(aTitle);
      } else if (sortTerm === 'date-asc') {
        const aDate = new Date(a.querySelector('.project-date').textContent);
        const bDate = new Date(b.querySelector('.project-date').textContent);
        return aDate - bDate;
      } else if (sortTerm === 'date-desc') {
        const aDate = new Date(a.querySelector('.project-date').textContent);
        const bDate = new Date(b.querySelector('.project-date').textContent);
        return bDate - aDate;
      }
    })
    .forEach(project => {
      projectsList.appendChild(project);
    });
});

// Afficher la modale de détails de projet
const modal = document.getElementById('modal');
const modalTitle = modal.querySelector('.modal-title');
const modalDate = modal.querySelector('.modal-date');
const modalDescription = modal.querySelector('.modal-description');
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const title = link.dataset.title;
    const date = link.dataset.date;
    const description = link.dataset.description;
    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalDescription.textContent = description;
    modal.style.display = 'block';
  });
});

// Fermer la modale de détails de projet
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
