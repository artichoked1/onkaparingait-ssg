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
});

function scrollToElement(id, offset = 42) {
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