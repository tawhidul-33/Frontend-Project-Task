// JS: getElementById diye
const three_bar = document.getElementById('three-bar');
const menu = document.getElementById('menu');

three_bar.addEventListener('click', () => {
    menu.classList.toggle('active');
});

