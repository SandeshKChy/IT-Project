const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
const navLinks = document.querySelectorAll('.navbar__menu a, .navbar__logo');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});
function confirmLeave(platform) {
    return confirm(`You are about to leave this page and visit ${platform}. Do you want to continue?`);
}