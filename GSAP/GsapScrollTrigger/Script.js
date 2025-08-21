// 2nd Method - Final to Initial
gsap.from("#page1 #circle", {
  scale: 0,
  rotate: 720,
  duration: 4,
  delay: 1,
});

gsap.from("#page2 #circle", {
  scale: 0,
  rotate: 720,
  duration: 4,
  // delay: 1,
  // scrollTrigger: "#page2 #circle",   // 1st Method
  //2nd Method below
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true, // It shows marker
    // start: "top 50%",
    // end: "top 20%",
    // scrub: true,  // we can give the value either boolean or 1-5 , 5 is more smooth , 1 less smooth
    scrub: 5,
  },
});
