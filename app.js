// setting timeline (tl) 
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".front-page",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
});

// timeline of front page
tl.fromTo(
  ".front-page",
  {
    clipPath: "circle(5%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 2,
  }
);

// timeline of music note
tl.fromTo(
  ".music-note",
  {
    scale: 0.5,
  },
  {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
  "-=2"
);

// timeline of title
tl.fromTo(
  ".title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

// timeline of sub-title
tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);
