import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the hero tagline
    const options = {
        strings: ['Ethical Hacker', 'Full-Stack Developer', 'Bug Bounty Hunter', 'Creator of ReconX'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
    };

    const typed = new Typed('#tagline', options);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

