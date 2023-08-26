window.onload = function () {

  /* arrow animation */
  $('.branch-arrow').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $('.branch-arrow').toggleClass('branch-arrow-reverse');
    if ($(window).width() < 1200) {
      $('.artwork').toggleClass('dark');
    }
  });

  document.querySelector('#search').oninput = function () {
    let userInput = this.value.trim().toLowerCase();
    let searchItems = document.querySelectorAll('.artworks-list a');

    searchItems.forEach(function (elem) {
      let index = elem.innerText.toLowerCase().search(userInput);
      if (userInput !== '') {
        if (index === -1) {
          elem.classList.add('hide');
          elem.innerHTML = elem.innerText;
        } else {
          elem.classList.remove('hide');
          let str = elem.innerText;
          elem.innerHTML = insertMark(str, index, userInput.length);
        }
      } else {
        elem.classList.remove('hide');
        elem.innerHTML = elem.innerText;
      }
    });
  }

  function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark style="background-color: #ff073a;">' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
  }

};
