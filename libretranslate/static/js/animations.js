document.addEventListener('DOMContentLoaded', () => {
    const orbsContainer = document.querySelector('.background-orbs');
    const orbs = [];

    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.classList.add('orb');
        orbsContainer.appendChild(orb);
        orbs.push(orb);
        animateOrb(orb);
    }

    function animateOrb(orb) {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        const size = 100 + Math.random() * 200;
        const duration = 20 + Math.random() * 20;

        orb.style.transform = `translate(${x}px, ${y}px)`;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.transition = `transform ${duration}s linear`;

        orb.addEventListener('transitionend', () => animateOrb(orb));
    }

    // Add orb styles
    const style = document.createElement('style');
    style.textContent = `
        .orb {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
            opacity: 0.2;
            filter: blur(50px);
        }
    `;
    document.head.appendChild(style);
});

function toggleColorScheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Set initial theme
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
})();
