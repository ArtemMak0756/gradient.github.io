if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true
    });

    gsap.fromTo('.hello', { opacity: 2 }, {
            opacity: 0.1,
            scrollTrigger: {
                trigger: '.hello',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.business-objectives', { opacity: 0 }, {
            opacity: 2,
            scrollTrigger: {
                trigger: '.block3',
                start: 'top center',
                end: '2300',
                scrub: true,
            }
        }
    );
}