// Declare the elements
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');
const pageTitle = document.querySelectorAll('#nav-bar a');

// Toggle for show and hide navbutton
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

