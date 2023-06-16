const Navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function (event) {
    event.preventDefault();
    
    if (this.window.scrollY >= '54') {
        Navbar.classList.add('PropertyChange')
    }
    else {
        Navbar.classList.remove('PropertyChange')
    }

});
