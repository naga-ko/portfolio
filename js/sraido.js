var slide = document.querySelector('.slider');
var prev = document.querySelector('.main__works__back');
var next = document.querySelector('.main__works__next');
var list1 = document.querySelector('.list1');
var list2 = document.querySelector('.list2');
var list3 = document.querySelector('.list3');
var list4 = document.querySelector('.list4');
var list5 = document.querySelector('.list5');

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
    if (slide.classList.contains('slider1')) {
        slide.classList.remove('slider1');
        slide.classList.add('slider2');
        list1.style.backgroundColor = 'transparent';
        list2.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider2')) {
        slide.classList.remove('slider2');
        slide.classList.add('slider3');
        list2.style.backgroundColor = 'transparent';
        list3.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider3')) {
        slide.classList.remove('slider3');
        slide.classList.add('slider4');
        list3.style.backgroundColor = 'transparent';
        list4.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider4')) {
        slide.classList.remove('slider4');
        slide.classList.add('slider5');
        list4.style.backgroundColor = 'transparent';
        list5.style.backgroundColor = '#21AEAE';
    } else {
        slide.classList.remove('slider5');
        slide.classList.add('slider1');
        list5.style.backgroundColor = 'transparent';
        list1.style.backgroundColor = '#21AEAE';
    }
};

function prevClick() {
    if (slide.classList.contains('slider1')) {
        slide.classList.remove('slider1');
        slide.classList.add('slider5');
        list1.style.backgroundColor = 'transparent';
        list5.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider2')) {
        slide.classList.remove('slider2');
        slide.classList.add('slider1');
        list2.style.backgroundColor = 'transparent';
        list1.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider3')) {
        slide.classList.remove('slider3');
        slide.classList.add('slider2');
        list3.style.backgroundColor = 'transparent';
        list2.style.backgroundColor = '#21AEAE';
    } else if (slide.classList.contains('slider4')) {
        slide.classList.remove('slider4');
        slide.classList.add('slider3');
        list4.style.backgroundColor = 'transparent';
        list3.style.backgroundColor = '#21AEAE';
    } else {
        slide.classList.remove('slider5');
        slide.classList.add('slider4');
        list5.style.backgroundColor = 'transparent';
        list4.style.backgroundColor = '#21AEAE';
    }
};

// Indicator clicks
list1.addEventListener('click', click1);
list2.addEventListener('click', click2);
list3.addEventListener('click', click3);
list4.addEventListener('click', click4);
list5.addEventListener('click', click5);

function click1() {
    slide.classList.remove('slider2', 'slider3', 'slider4', 'slider5');
    slide.classList.add('slider1');
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = 'transparent';
    list1.style.backgroundColor = '#21AEAE';
}

function click2() {
    slide.classList.remove('slider1', 'slider3', 'slider4', 'slider5');
    slide.classList.add('slider2');
    list1.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#21AEAE';
}

function click3() {
    slide.classList.remove('slider1', 'slider2', 'slider4', 'slider5');
    slide.classList.add('slider3');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#21AEAE';
}

function click4() {
    slide.classList.remove('slider1', 'slider2', 'slider3', 'slider5');
    slide.classList.add('slider4');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#21AEAE';
}

function click5() {
    slide.classList.remove('slider1', 'slider2', 'slider3', 'slider4');
    slide.classList.add('slider5');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = '#21AEAE';
}
