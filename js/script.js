const gnavIcon = document.querySelector('.header__gnav__list');
const menu = document.getElementById('menu');

gnavIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});