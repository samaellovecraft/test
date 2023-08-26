/**
 * Executes a callback function when the DOM is ready.
 * * Includes support for older browsers that do not have the addEventListener method.
 * @param {function} callback - The function to execute when the DOM is ready. 
 * @example
 * whenDOMReady(() => {
 *   alert('DOM is ready!');
 * });
 */
const whenDOMReady = (callback) => {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
};

whenDOMReady(() => {
    document.querySelector('.navbar__burger').addEventListener('click', (e) => {
        // Burger invocation
        document.querySelectorAll('.navbar__burger, .navbar__menu, .navbar__list li, .navbar').forEach((el) => {
            el.classList.toggle('active');
        });

        // Lock page scroll when the burger is active
        // TODO: Сheck if it's necessary. Apparently it's redundant (not sure)
        document.querySelector('.artworks-area').classList.toggle('lock');
    });

    document.querySelector('.museum').addEventListener('click', (e) => {
        // Museum link animation
        // Normal state:                Museum
        // Active state:    Poetry     (Museum)     Prose  
        document.querySelectorAll('.museum-item, .museum').forEach((el) => {
            el.classList.toggle('active');
        });
    });
});