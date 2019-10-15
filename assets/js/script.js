var button = document.querySelector('.toggle');

button.addEventListener('click', () => {
    document.querySelector('.menu-links').classList.toggle('active');
    document.querySelector('.user').classList.toggle('active');
})
