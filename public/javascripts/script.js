//javascript for responsive navbar strts
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')    
    navbar.style.height = 'auto';
})

// adjusting navbar height to auto when toggle button is pressed

//javascript for responsive navbar ends

//footer javascript Top to page

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
