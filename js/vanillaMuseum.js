/**
 * Toggles the visibility of the sidebar menu and the direction of the arrow when the arrow is clicked.
 */
function handleBranchArrowClick() {
    document.querySelector('.branch-arrow').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.menu').classList.toggle('menu-active');
        document.querySelector('.branch-arrow').classList.toggle('branch-arrow-reverse');

        if (window.innerWidth < 1200) {
            document.querySelector('.artwork').classList.toggle('dark');
        }
    });
}

/**
 * Filters search results based on the user's search input.
 */
function filterSearchResults() {
    // Get the user's search input and convert it to lowercase
    let userInput = this.value.trim().toLowerCase();
    // Get all search items
    let searchItems = document.querySelectorAll('.artworks-list a');

    // Loop through each search item
    searchItems.forEach(function (searchItem) {
        // Check if the search item's text matches the user's search input
        let index = searchItem.innerText.toLowerCase().search(userInput);
        if (userInput !== '') {
            if (index === -1) {
                // If the search item's text does not match the user's search input, hide it
                searchItem.classList.add('hide');
                searchItem.innerHTML = searchItem.innerText;
            } else {
                // If the search item's text matches the user's search input, show it and highlight the matched text
                searchItem.classList.remove('hide');
                let str = searchItem.innerText;
                searchItem.innerHTML = highlightMatchedText(str, index, userInput.length);
            }
        } else {
            // If the user's search input is empty, show all search items
            searchItem.classList.remove('hide');
            searchItem.innerHTML = searchItem.innerText;
        }
    });
}

/**
 * Highlights matched text in a string.
 * @param {string} string - The string to highlight.
 * @param {number} pos - The starting position of the matched text.
 * @param {number} len - The length of the matched text.
 * @returns {string} The string with the matched text highlighted.
 */
function highlightMatchedText(string, pos, len) {
    return string.slice(0, pos) + '<mark style="background-color: #ff073a;">' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

window.onload = function () {
    handleBranchArrowClick();
    document.querySelector('#search').oninput = filterSearchResults;
}