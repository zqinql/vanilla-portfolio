const nav = document.querySelector('.toggle')
const sidebar = document.querySelector('nav ul')
nav.addEventListener('click', function() {
    sidebar.classList.toggle('slide')
})