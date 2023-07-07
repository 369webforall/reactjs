import gsap from 'gsap';
let tl = gsap.timeline();

tl.from('#page1', {
  y: '100vh',
  duration: 1,
  delay: 1,
});
