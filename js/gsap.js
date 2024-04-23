gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.header__back__img1').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;

    gsap.to(wrap, {
        y: y,
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
            //markers: true
        }
    })
});
gsap.utils.toArray('.header__back__img2').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;

    gsap.to(wrap, {
        y: y,
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
            //markers: true
        }
    })
});
gsap.utils.toArray('.header__back__img2').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;

    gsap.to(wrap, {
        y: y,
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.1,
            //markers: true
        }
    })
});
gsap.utils.toArray('.header__line1').forEach(wrap => {
    gsap.to(wrap, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: wrap,
            start: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
            //markers: true
        }
    })
});
gsap.utils.toArray('.header__line2').forEach(wrap => {
    gsap.to(wrap, {
        y: +100,
        x: -30,
        opacity: 0,
        scrollTrigger: {
            trigger: wrap,
            start: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
            //markers: true
        }
    })
});
gsap.utils.toArray('.header__line3').forEach(wrap => {
    gsap.to(wrap, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: wrap,
            start: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
            //markers: true
        }
    })
});

gsap.utils.toArray('.main__back').forEach(wrap => {
    gsap.to(wrap, {
        x: +1080,
        scrollTrigger: {
            trigger: wrap,
            start: "top top ",
            toggleActions: "play none none reverse",
            markers: true,
        }
    })
});
gsap.utils.toArray('.main__about__in__img').forEach(wrap => {
    gsap.to(wrap, {
        x: +1100,
        scrollTrigger: {
            trigger: wrap,
            start: "-280px",
            toggleActions: "play none none reverse",
            // markers: true,
        }
    })
});
