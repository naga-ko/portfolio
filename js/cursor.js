function getMousePos(e) {
    return { x: e.clientX, y: e.clientY };
}

function moveCursor(e) {
    const cursor = document.querySelector('.cursor');
    const mousePos = getMousePos(e);
    cursor.style.left = `${mousePos.x}px`;
    cursor.style.top = `${mousePos.y}px`;
}

function moveFollower(e) {
    const follower = document.querySelector('.follower');
    const mousePos = getMousePos(e);
    follower.style.left = `${mousePos.x}px`;
    follower.style.top = `${mousePos.y}px`;
}

const cursorElement = document.querySelector('.cursor');
const followerElement = document.querySelector('.follower');
const contentElements = document.querySelectorAll('.content');

function moveElements(e) {
    const mousePos = { x: e.clientX, y: e.clientY };
    cursorElement.style.left = `${mousePos.x}px`;
    cursorElement.style.top = `${mousePos.y}px`;
    followerElement.style.left = `${mousePos.x}px`;
    followerElement.style.top = `${mousePos.y}px`;
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

document.querySelector('.main__about__in__img').addEventListener('mouseenter', addHoverClass);
document.querySelector('.main__about__in__img').addEventListener('mouseleave', removeHoverClass);

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


///
