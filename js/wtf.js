document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar__burger').addEventListener('click', (event) => {
        document.querySelectorAll('.navbar__burger,.navbar__menu,.navbar__list li,.navbar').forEach((el) => {
            el.classList.toggle('active');
        });
        document.querySelector('.artworks-area').classList.toggle('lock');
    });
    document.querySelector('.museum').addEventListener('click', (event) => {
        document.querySelectorAll('.museum-item,.museum').forEach((el) => {
            el.classList.toggle('active');
        });
    });
});