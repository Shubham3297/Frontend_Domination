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
// gsap.from("#box", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 4,
//   delay: 1,
// });

// Timeline
var t1 = gsap.timeline();

t1.to("#box1", {
  x: 1000,
  rotate: 360,
  scale: 0.5,
  duration: 2,
  delay: 1,
});

t1.to("#box2", {
  x: 1000,
  rotate: 360,
  scale: 0.5,
  duration: 1,
});
// Timeline
