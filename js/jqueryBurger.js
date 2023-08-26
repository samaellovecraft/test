$(document).ready(function () {
  $('.navbar__burger').click(function (event) {
    // Burger invocation
    $('.navbar__burger, .navbar__menu, .navbar__list li, .navbar').toggleClass('active');

    // Lock page scroll when the burger is active
    // TODO: Сheck if it's necessary. Apparently it's redundant (not sure)
    $('.artworks-area').toggleClass('lock');
  });
  $('.museum').click(function (event) {
    // Museum link animation
    // Normal state:                Museum
    // Active state:    Poetry     (Museum)     Prose 
    $('.museum-item, .museum').toggleClass('active');
  });
});