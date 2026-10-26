document.addEventListener('DOMContentLoaded', () => {
    const jaar = document.querySelector('.site-footer p');
    if (jaar) {
        jaar.textContent = `\u00A9 ${new Date().getFullYear()} Yusuf Uslu. Alle rechten voorbehouden.`;
    }

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form && status) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const naam = document.getElementById('naam-input').value.trim();
            const email = document.getElementById('email-input').value.trim();
            const bericht = document.getElementById('bericht').value.trim();

            if (naam && email && bericht) {
                status.textContent = 'Bedankt voor je bericht, ' + naam + '!';
                status.style.color = 'green';
                form.reset();
            } else {
                status.textContent = 'Vul alle velden in.';
                status.style.color = 'red';
            }
        });
    }

    document.querySelectorAll('.nav-links a').forEach((link) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) {
            return;
        }
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const doel = document.querySelector(href);
            if (doel) {
                doel.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
