const toggleMenu = document.getElementById('toggle-menu');
const navList = document.getElementById('nav-list');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
})