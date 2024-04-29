document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector(".about__main__Btn1__text");
    const btn2 = document.querySelector(".about__main__Btn2__text");
    const btn3 = document.querySelector(".about__main__Btn3__text");
    const btn4 = document.querySelector(".about__main__Btn4__text");
    const btn5 = document.querySelector(".about__main__Btn5__text");
    const btn6 = document.querySelector(".about__main__Btn6__text");
    const textarea = document.querySelector(".about__main__textarea__text");

    btn1.addEventListener("click", function () {
        textarea.innerHTML = "　性格<br><br>1効率化したい性格<br>　時間を無駄にすることが好きじゃないので時間管理が得意です。<br>　集合時間５分前までには必ず着くタイプ。<br><br>2地道な細かい作業が得意<br>　<br>3創造、想像することが好き<br>";
    });

    btn2.addEventListener("click", function () {
        textarea.innerHTML = "技術";
    });

    btn3.addEventListener("click", function () {
        textarea.innerHTML = "趣味";
    });

    btn4.addEventListener("click", function () {
        textarea.innerHTML = "興味";
    });

    btn5.addEventListener("click", function () {
        textarea.innerHTML = "想い";
    });

    btn6.addEventListener("click", function () {
        textarea.innerHTML = "経緯";
    });
});