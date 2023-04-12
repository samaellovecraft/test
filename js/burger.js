$(document).ready(function() {
  $('.navbar__burger').click(function(event) {
    $('.navbar__burger,.navbar__menu,.navbar__list li').toggleClass('active');
    $('.artworks-area').toggleClass('lock');
    $('.navbar').toggleClass('active');
  });
  $('.museum').click(function(event) {
    $('.museum-item').toggleClass('active');
    $('.museum').toggleClass('active');
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.navbar__burger').addEventListener('click', function(event) {
//     document.querySelectorAll('.navbar__burger,.navbar__menu,.navbar__list li').forEach(function(element) {
//       element.classList.toggle('active');
//     });
//     document.querySelector('.artworks-area').classList.toggle('lock');
//     document.querySelector('.navbar').classList.toggle('active');
//   });
//   document.querySelector('.museum').addEventListener('click', function(event) {
//     document.querySelector('.museum-item').classList.toggle('active');
//     document.querySelector('.museum').classList.toggle('active');
//   });
// });