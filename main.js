document.addEventListener('DOMContentLoaded', function() {
    // Select the menu button and the navbar
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    // Add event listener to the menu button for click events
    menuBtn.addEventListener('click', function() {
        // Toggle the 'active' class on the navbar when the menu button is clicked
        navbar.classList.toggle('active');
    });

    // Add event listener to the window for resize events
    window.addEventListener('resize', function() {
        // Check if the window width is greater than 768 pixels
        if (window.innerWidth > 768) {
            // If it is, remove the 'active' class from the navbar
            navbar.classList.remove('active');
        }
    });
});


let sections = document.querySelectorAll(".section") ;
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offeset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let Id = sec.getAttribute('id');

        if  (top > offeset && top <= offeset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*= "'+Id+'"]').classList.add('active');
            });
        };
    }); 


    let header = document.querySelector ("header");
    header.classList.toggle( 'sticky', window.scrollY>100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading ', {origin: 'top'});
ScrollReveal().reveal('.home-img,.contact form' ,{ origin : 'buttom'}) ;
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

const typed = new Typed('.kaze', {
    strings: ['Web Development', 'And','Data Science'],
    typeSpeed: 50,
    backspeed:30,
    backDelay:800,
    loop: true,
});
// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // If all validations pass, you can submit the form here
    // For now, let's just alert a success message
    alert('Form submitted successfully!');
    form.reset();
});
