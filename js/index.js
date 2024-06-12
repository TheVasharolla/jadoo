document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Create the observer
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate__animated', 'animate__fadeInDown'); // Add Animate.css classes
//       return;
//     }
//     entry.target.classList.remove('animate__animated', 'animate__fadeInDown'); // Remove Animate.css classes
//   });
// });

// // Get the elements you want to animate
// const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// // Loop over the elements and add each one to the observer
// elementsToAnimate.forEach((element) => observer.observe(element));

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});