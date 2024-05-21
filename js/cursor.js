const cursor = document.querySelector(".change");
const cursorImg = document.querySelector(".change img");

const mouseMove = (e) => {
    cursorImg.style.top = `${e.clientY}px`;
    cursorImg.style.left = `${e.clientX}px`;
};

cursor.addEventListener("mouseover", (e) => {
    cursor.classList.add("on_mouse");
    mouseMove(e);
});

cursor.addEventListener("mouseout", () => {
    cursor.classList.remove("on_mouse");
});