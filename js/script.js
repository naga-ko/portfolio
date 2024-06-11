const gnavIcon = document.querySelector('.header__gnav__list');
const menu = document.querySelector('.header__menu');

gnavIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});
