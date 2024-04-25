var slide = document.querySelector('.slider');
var prev = document.querySelector('.main__works__back');
var next = document.querySelector('.main__works__next');
var list1 = document.querySelector('.list1');
var list2 = document.querySelector('.list2');
var list3 = document.querySelector('.list3');
var list4 = document.querySelector('.list4');

// クリックイベント

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
    if (slide.classList.contains('slider1') === true) {
        slide.classList.remove('slider1');
        slide.classList.add('slider2');
        list1.style.backgroundColor = 'transparent';
        list2.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider2') === true) {
        slide.classList.remove('slider2');
        slide.classList.add('slider3');
        list2.style.backgroundColor = 'transparent';
        list3.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider3') === true) {
        slide.classList.remove('slider3');
        slide.classList.add('slider4');
        list3.style.backgroundColor = 'transparent';
        list4.style.backgroundColor = '#21AEAE';
    } else {
        slide.classList.remove('slider4');
        slide.classList.add('slider1');
        list4.style.backgroundColor = 'transparent';
        list1.style.backgroundColor = '#21AEAE';
    }
};

function prevClick() {
    if (slide.classList.contains('slider1') === true) {
        slide.classList.remove('slider1');
        slide.classList.add('slider4');
        list1.style.backgroundColor = 'transparent';
        list4.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider2') === true) {
        slide.classList.remove('slider2');
        slide.classList.add('slider1');
        list2.style.backgroundColor = 'transparent';
        list1.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider3') === true) {
        slide.classList.remove('slider3');
        slide.classList.add('slider2');
        list3.style.backgroundColor = 'transparent';
        list2.style.backgroundColor = '#21AEAE';
    } else {
        slide.classList.remove('slider4');
        slide.classList.add('slider3');
        list4.style.backgroundColor = 'transparent';
        list3.style.backgroundColor = '#21AEAE';
    }
};

// インジケーター

list1.addEventListener('click', click1);
list2.addEventListener('click', click2);
list3.addEventListener('click', click3);
list4.addEventListener('click', click4);

function click1() {
    slide.classList.add('slider1');
    slide.classList.remove('slider2');
    slide.classList.remove('slider3');
    slide.classList.remove('slider4');
    list1.style.backgroundColor = '#21AEAE';
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
}

function click2() {
    slide.classList.remove('slider1');
    slide.classList.add('slider2');
    slide.classList.remove('slider3');
    slide.classList.remove('slider4');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#21AEAE';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
}

function click3() {
    slide.classList.remove('slider1');
    slide.classList.remove('slider2');
    slide.classList.add('slider3');
    slide.classList.remove('slider4');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#21AEAE';
    list4.style.backgroundColor = 'transparent';
}

function click4() {
    slide.classList.remove('slider1');
    slide.classList.remove('slider2');
    slide.classList.remove('slider3');
    slide.classList.add('slider4');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#21AEAE';
}