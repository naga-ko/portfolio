document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.querySelector('.cursor');
    const followerElement = document.querySelector('.follower');
    const contentElements = document.querySelectorAll('.content a');
    const gnavIcon = document.querySelector('.header__gnav__list');
    const menu = document.querySelector('.header__menu');
    const mainAboutImg = document.querySelector('.main__about__in__img');
    const worksLink = document.querySelector('.works__main__individual__table__url__2__link');

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
});
