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