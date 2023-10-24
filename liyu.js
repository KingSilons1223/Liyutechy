document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation for smaller screens
    const navItems = document.querySelectorAll('nav ul li');
    let navOpen = false;

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (!navOpen) {
                navOpen = true;
                item.style.transform = 'scale(1.2)';
            } else {
                navOpen = false;
                item.style.transform = 'scale(1)';
            }
        });
    });

    // Small animation for hovering over product cards
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Adding some dynamic background change on scroll to wow the audience
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        if (scrolled > 100) {
            document.body.style.backgroundColor = '#ffd280';  // Change color according to your preference
        } else {
            document.body.style.backgroundColor = 'rgb(255,192, 0)';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 1. Animated Scroll on Click
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // 2. Menu Toggle for Mobile and Tablet
    const menuToggle = document.createElement('div');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    menuToggle.style.display = 'none'; // Initially hidden
    menuToggle.className = 'menu-toggle';
    document.querySelector('header').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        const navItems = document.querySelector('nav ul');
        if (navItems.style.display === 'block') {
            navItems.style.display = 'none';
        } else {
            navItems.style.display = 'block';
        }
    });

    // Add any other interactivity you'd like here!
});
