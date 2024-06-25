document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.querySelector('.cursor');
    const followerElement = document.querySelector('.follower');
    const contentElements = document.querySelectorAll('.content a');
    const gnavIcon = document.querySelector('.header__gnav__list');
    const menu = document.querySelector('.header__menu');
    const mainAboutImg = document.querySelector('.main__about__in__img');
    const worksLink = document.querySelector('.works__main__individual__table__url__2__link');
    const aboutMainBtn1 = document.querySelector('.about__main__Btn1__text');
    const aboutMainBtn2 = document.querySelector('.about__main__Btn2__text');
    const aboutMainBtn3 = document.querySelector('.about__main__Btn3__text');
    const aboutMainBtn4 = document.querySelector('.about__main__Btn4__text');
    const aboutMainBtn5 = document.querySelector('.about__main__Btn5__text');
    const aboutMainText4 = document.querySelector('.about__main__text__4');

    function getMousePos(e) {
        return { x: e.clientX, y: e.clientY };
    }

    function moveElements(e) {
        const mousePos = { x: e.clientX, y: e.clientY };
        const cursorRect = cursorElement.getBoundingClientRect();
        const followerRect = followerElement.getBoundingClientRect();

        cursorElement.style.left = `${mousePos.x - cursorRect.width / 2}px`;
        cursorElement.style.top = `${mousePos.y - cursorRect.height / 2}px`;
        followerElement.style.left = `${mousePos.x - followerRect.width / 2}px`;
        followerElement.style.top = `${mousePos.y - followerRect.height / 2}px`;
    }

    document.addEventListener('mousemove', moveElements);

    function addHoverClass() {
        cursorElement.classList.add('hover');
        followerElement.classList.add('hover');
        setTimeout(() => {
            cursorElement.style.transition = 'none';
            followerElement.style.transition = 'none';
        }, 400);
    }

    function removeHoverClass() {
        cursorElement.classList.remove('hover');
        followerElement.classList.remove('hover');
        cursorElement.style.transition = '';
        followerElement.style.transition = '';
    }

    function addContentHoverClass() {
        cursorElement.classList.add('hover');
        followerElement.classList.add('hover');
        setTimeout(() => {
            cursorElement.style.transition = 'none';
            followerElement.style.transition = 'none';
        }, 400);
    }

    function removeContentHoverClass() {
        cursorElement.classList.remove('hover');
        followerElement.classList.remove('hover');
        cursorElement.style.transition = '';
        followerElement.style.transition = '';
    }

    contentElements.forEach(content => {
        content.addEventListener('mouseenter', addContentHoverClass);
        content.addEventListener('mouseleave', removeContentHoverClass);
    });

    if (mainAboutImg) {
        mainAboutImg.addEventListener('mouseenter', addHoverClass);
        mainAboutImg.addEventListener('mouseleave', removeHoverClass);
    }

    function toggleFollowerColor() {
        followerElement.classList.toggle('color-change');
    }

    gnavIcon.addEventListener('click', () => {
        gnavIcon.classList.toggle('open');
        menu.classList.toggle('open');
        toggleFollowerColor();
    });

    gnavIcon.addEventListener('mouseenter', addHoverClass);
    gnavIcon.addEventListener('mouseleave', removeHoverClass);

    if (worksLink) {
        worksLink.addEventListener('mouseenter', addHoverClass);
        worksLink.addEventListener('mouseleave', removeHoverClass);
    }

    if (aboutMainBtn1) {
        aboutMainBtn1.addEventListener('mouseenter', addHoverClass);
        aboutMainBtn1.addEventListener('mouseleave', removeHoverClass);
    }
    if (aboutMainBtn2) {
        aboutMainBtn2.addEventListener('mouseenter', addHoverClass);
        aboutMainBtn2.addEventListener('mouseleave', removeHoverClass);
    }
    if (aboutMainBtn3) {
        aboutMainBtn3.addEventListener('mouseenter', addHoverClass);
        aboutMainBtn3.addEventListener('mouseleave', removeHoverClass);
    }
    if (aboutMainBtn4) {
        aboutMainBtn4.addEventListener('mouseenter', addHoverClass);
        aboutMainBtn4.addEventListener('mouseleave', removeHoverClass);
    }
    if (aboutMainBtn5) {
        aboutMainBtn5.addEventListener('mouseenter', addHoverClass);
        aboutMainBtn5.addEventListener('mouseleave', removeHoverClass);
    }

    if (aboutMainText4) {
        aboutMainText4.addEventListener('mouseenter', addHoverClass);
        aboutMainText4.addEventListener('mouseleave', removeHoverClass);
    }
});
