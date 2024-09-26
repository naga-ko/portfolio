const sliderWrapper = document.querySelector('.main__works__wrapper');
const slider = document.querySelector('.slider');
const contents = document.querySelectorAll('.content'); // スライドの数を取得
let slideWidth = sliderWrapper.clientWidth; // スライド1つの幅
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;
let isMoved = false; // ドラッグで動いたかどうかを確認するフラグ
const threshold = 5; // ドラッグとみなす最小距離

// ボタン
const nextButton = document.querySelector('.main__works__next');
const backButton = document.querySelector('.main__works__back');

// インジケーター
const indicators = document.querySelectorAll('.indicator li');

// 画像やリンク上でもドラッグを有効にする
const links = document.querySelectorAll('.content a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (isMoved) e.preventDefault(); // ドラッグで動いた場合はリンクを無効化
    });

    link.addEventListener('mousedown', (e) => {
        e.preventDefault(); // mousedown時にリンクがフォーカスされないように
    });
});

// ドラッグイベント
sliderWrapper.addEventListener('mousedown', startDrag);
sliderWrapper.addEventListener('mousemove', drag);
sliderWrapper.addEventListener('mouseup', endDrag);
sliderWrapper.addEventListener('mouseleave', endDrag);
sliderWrapper.addEventListener('touchstart', startDrag);
sliderWrapper.addEventListener('touchmove', drag);
sliderWrapper.addEventListener('touchend', endDrag);

// ボタンクリックでスライドを動かす
nextButton.addEventListener('click', () => {
    if (currentIndex < contents.length - 1) {
        currentIndex += 1;
        setPositionByIndex();
    }
});

backButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        setPositionByIndex();
    }
});

// インジケータークリックでスライドを動かす
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        if (index !== currentIndex) {
            currentIndex = index;
            setPositionByIndex();
        }
    });
});

function startDrag(e) {
    isDragging = true;
    isMoved = false; // ドラッグの動作が始まったときはまだ動いていない
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
}

function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const movedBy = currentPosition - startPos;
    if (Math.abs(movedBy) > threshold) {
        isMoved = true; // 一定の距離を超えたら「動いた」とみなす
    }
    currentTranslate = prevTranslate + movedBy;
}

function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    // スライドの半分以上移動していれば次、または前に移動
    if (movedBy < -slideWidth / 4 && currentIndex < contents.length - 1) {
        currentIndex += 1;
    } else if (movedBy > slideWidth / 4 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function animation() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
    currentTranslate = -currentIndex * slideWidth;
    prevTranslate = currentTranslate;
    slider.style.transition = 'transform 0.3s ease-out';
    slider.style.transform = `translateX(${currentTranslate}px)`;

    updateIndicators(); // インジケーターの更新
}

// リサイズイベントに対応
window.addEventListener('resize', () => {
    // 画面サイズが変わった時にスライドの幅を再計算
    slideWidth = sliderWrapper.clientWidth;
    setPositionByIndex(); // 位置を再設定
});

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.style.backgroundColor = '$color-accent'; // 現在のインジケーター
        } else {
            indicator.style.backgroundColor = '$color-White'; // 非表示のインジケーター
        }
    });
}
