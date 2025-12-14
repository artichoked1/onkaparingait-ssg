document.addEventListener('DOMContentLoaded', () => {

    // when the user scrolls down, add a border to the nav
    const nav = document.querySelector('nav');
    function updateNavBorder() {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    updateNavBorder();
    window.addEventListener('scroll', updateNavBorder, { passive: true });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    function closeMenu() {
        if (!nav) return;
        nav.classList.remove('menu-open');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                event.preventDefault();
                scrollToElement(targetId);
            }
            closeMenu();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!nav.classList.contains('menu-open')) return;

        const isClickInsideNav = nav.contains(event.target);
        const isToggleButton = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isToggleButton) {
            closeMenu();
        }
    });

});

function scrollToElement(id, offset = 60) {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Initialise map
const map = L.map('map', {
    zoomControl: false
}).setView([-35.22708204604496, 138.54444632445], 11);

L.circle([-35.22180139887642, 138.52425147667432], {radius: 10000, weight: 1, fillColor: '#7DBEFF'}).addTo(map);
L.circle([-35.18147515901024, 138.50284583247344], {radius: 10000, weight: 1, fillColor: '#7DBEFF'}).addTo(map);
L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    }
).addTo(map);

// L.tileLayer(
//     'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
//     {
//         attribution: '&copy; OpenStreetMap &copy; Stadia Maps'
//     }
// ).addTo(map);
