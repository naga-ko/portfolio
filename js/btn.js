document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector(".about__main__Btn1__text");
    const btn2 = document.querySelector(".about__main__Btn2__text");
    const btn3 = document.querySelector(".about__main__Btn3__text");
    const btn4 = document.querySelector(".about__main__Btn4__text");
    const btn5 = document.querySelector(".about__main__Btn5__text");
    const btn6 = document.querySelector(".about__main__Btn6__text");
    const textarea = document.querySelector(".about__main__textarea__text");

    btn1.addEventListener("click", function () {
        textarea.innerHTML = "<h3>　性格</h3><br>1 効率化したい性格<br>　時間を無駄にすることが好きじゃないので時間管理が得意です。<br>　次の行動をあらかじめ考えてから動く。<br><br>2 地道な細かい作業が得意<br>　<br>3 創造、想像することが好き<br>　Webデザインを知る前から絵を描くことやデザインすること、<br>　何かを作ることが好き。";
    });

    btn2.addEventListener("click", function () {
        textarea.innerHTML = "<h3>　技術</h3><br>　HTML　CSS　Sass　JavaScript　WordPress　microCMS　GSAP<br>　Adobe Illustrator　Adobe Photoshop　Figma<br><br>　デザイン面<br>　Webサイトをみる側に立って、分かりやすいデザイン、<br>　飽きないデザインを心がけて制作しています。<br><br>　コーディング面<br>　Webサイトを作るのに困らない程度の知識があります。<br>　効率の良い、見やすいコーディングをできるように勉強をしています。<br>　GSAPで動きを作ることが好きです。";
    });

    btn3.addEventListener("click", function () {
        textarea.innerHTML = "<h3>　趣味</h3><br>・アニメ鑑賞<br>　最近だと転スラ、HUNTER×HUNTER、ヒロアカ、ジョジョなどを見ています。<br><br>・ゲーム<br>　VALORANT、Minecraft、ツムツム、スマブラ、プロセカなど、<br>　いろんなジャンルやるのが好きです。<br><br>・運動<br>　バドミントン、水泳、バレー、筋トレなどで体を動かすことが好きです。<br><br>・絵を描く<br>　0から描くことはあまりしませんが、<br>　基本的に模写やキャラなどのパーツを参考に組み立てて描くことが好きです。";
    });

    btn4.addEventListener("click", function () {
        textarea.innerHTML = "<h3>　経緯</h3><br>　岐阜県各務原市出身で、育ちは八百津町というところです。<br>　<br>　高校は情報科の学校に通っていたため、pcの操作などは高校の時に覚えました。<br><br>　高校でプログラミングも習っていたのでその知識を活かしたいと思い、<br>　トライデントコンピュータ専門学校、Webデザイン学科に入学。<br><br>　そして、学校でWebについて学び、日々勉強に励んでいます。";
    });

    btn5.addEventListener("click", function () {
        textarea.innerHTML = "<h3>　想い</h3><br>　「デザインは設計」<br><br>　私は最初「デザイン」とは表面的なところを指す言葉だと思っていました。<br>　しかしトライデントコンピュータ専門学校で学んでからは問題を解決するために<br>　構造、仕様、計画、活動など、すべてを考えて設計することだと考えています。<br><br>　ブルーロックという漫画にでてくるスナッフィーというキャラも<br>　「サッカーは仕事」「ゴールをデザイン（設計）する」という考え方で、<br>　この「パターンはダメだった」→「じゃあ次はこのパターン」「次はこれ」と、<br>　次のことを考えて動く、将来のことを考えて仕事をするという生き方が<br>　私はとても賢い、そしてかっこいいと想っています。";
    });
});