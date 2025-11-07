const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'light' ? 'Mode sombre' : 'Mode clair';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navLinks.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translateY(8px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '';
        }
    });
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .project-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
