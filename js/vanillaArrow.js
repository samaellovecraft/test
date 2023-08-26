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