if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true
    });

    gsap.fromTo('.personal', { opacity: 2 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.personal',
                start: 'top center',
                end: '600',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.team_blog', { opacity: 0 }, {
            opacity: 2,
            scrollTrigger: {
                trigger: '.team_blog',
                start: 'top center',
                end: '1000',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.main-projects', { opacity: 0 }, {
            opacity: 2,
            scrollTrigger: {
                trigger: '.projects-clients__main',
                start: 'top center',
                end: '1000',
                scrub: true,
            }
        }
    );
}