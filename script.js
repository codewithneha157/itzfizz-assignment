gsap.registerPlugin(ScrollTrigger);


/* ==============================
   PAGE LOAD ANIMATION
============================== */

const intro = gsap.timeline();

intro.fromTo(
    ".tagline",
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
    }
);

intro.fromTo(
    ".headline",
    {
        opacity: 0,
        y: 40
    },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    },
    "-=0.3"
);

intro.fromTo(
    ".subtitle",
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    },
    "-=0.6"
);

intro.fromTo(
    ".stat",
    {
        opacity: 0,
        y: 30
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    },
    "-=0.4"
);


/* ==============================
   CAR SCROLL ANIMATION
============================== */

gsap.to(".car", {

    x: 500,

    y: -180,

    rotation: 18,

    scale: 0.65,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1
    }

});