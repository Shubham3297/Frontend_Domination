// console.log("first");

// 1st Method - Initial to Final
// gsap.to("#box", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 4,
//   delay: 1,
// });

// 2nd Method - Final to Initial
// gsap.from("#nav h3", {
//   y: -50,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
//   stagger: 0.4,
// });

// gsap.from("#main h1", {
//   x: -500,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
//   stagger: 0.4,
// });

// Timeline
var tl = gsap.timeline();
tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.4,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.4,
});

tl.from("img", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  rotate: 45,
  stagger: 0.5,
});
