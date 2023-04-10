window.onload = function() {

  $('a.dropdown-item.shop').on('click', function(e) {
    $('a.nav-link.dropdown-toggle.shop').toggleClass('active');
  });
}
