document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector(".about__main__Btn1__text");
    const btn2 = document.querySelector(".about__main__Btn2__text");
    const btn3 = document.querySelector(".about__main__Btn3__text");
    const btn4 = document.querySelector(".about__main__Btn4__text");
    const btn5 = document.querySelector(".about__main__Btn5__text");
    const btn6 = document.querySelector(".about__main__Btn6__text");
    const textarea = document.querySelector(".about__main__textarea__text");

    btn1.addEventListener("click", function () {
        textarea.innerHTML = "　性格<br><br>1 効率化したい性格<br>　時間を無駄にすることが好きじゃないので時間管理が得意です。<br>　次の行動をあらかじめ考えてから動く。<br>　集合時間５分前までには必ず着くタイプ。<br><br>2 地道な細かい作業が得意<br>　<br>3 創造、想像することが好き<br>　Webデザイナーを知る前から絵を描くことやデザインすること、<br>　何かを作ることが好き。";
    });

    btn2.addEventListener("click", function () {
        textarea.innerHTML = "　技術<br><br>　HTML　CSS　Sass　JavaScript　WordPress　microCMS　GSAP<br>　Adobe Illustrator　Adobe Photoshop　Figma<br><br>　デザイン面<br>　Webサイトを観る側に立って、分かりやすいデザイン、<br>　飽きないデザインを心がけて制作しています。<br><br>　コーディング面<br>　Webサイトを作るのに困らない程度の知識があります。<br>　コーディング面では動きを作ることが好きです。";
    });

    btn3.addEventListener("click", function () {
        textarea.innerHTML = "　趣味<br><br>・アニメ鑑賞<br>　最近だと転スラ、怪獣8号、ダンジョン飯、俺レベなどを見ています。<br><br>・ゲーム<br>　VALORANT、minecraft、ツムツム、スマブラ、プロセカなど、<br>　いろんなジャンルやるのが好きです。<br><br>・スポーツ<br>　バドミントン、水泳、バレー、卓球などで体を動かすことが好きです。";
    });

    btn4.addEventListener("click", function () {
        textarea.innerHTML = "　経緯<br><br>　岐阜県各務原市出身で、育ちは八百津町というところです。<br>　<br>　高校は情報科の学校に通っていたため、pcの操作などは高校の時に覚えました。<br><br>　高校でプログラミングも習っていたのでその知識を活かしたいと思い、<br>　トライデントコンピュータ専門学校、Webデザイン学科に入学。<br><br>　そして、学校でWebについて学び、デザインの楽しさに気づき、<br>　「Webデザイナー」になるために日々勉強に励んでいます。";
    });

    // btn5.addEventListener("click", function () {
    //     textarea.innerHTML = "経緯";
    // });

    // btn6.addEventListener("click", function () {
    //     textarea.innerHTML = "経緯";
    // });
});