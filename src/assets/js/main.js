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