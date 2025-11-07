document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('emailLink');
    const phoneLink = document.getElementById('phoneLink');

    const emailParts = ['karim', 'merkache', 'example', 'com'];
    const phoneParts = ['+33', '6', '12', '34', '56', '78'];

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = `${emailParts[0]}.${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`;
        emailLink.href = `mailto:${email}`;
        emailLink.textContent = email;
        emailLink.classList.remove('protected-contact');
    });

    phoneLink.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = phoneParts.join(' ');
        const phoneHref = phoneParts.join('');
        phoneLink.href = `tel:${phoneHref}`;
        phoneLink.textContent = phone;
        phoneLink.classList.remove('protected-contact');
    });
});
