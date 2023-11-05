// *  JS Script for my web portfolio


// *** Sticky Bar ***//
const navbar = document.querySelector("header");
let scrolling = false; //This will track scrolling

function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
        scrolling = true;

        //flag is set to true if scrolling is detected
        //hence removes sticky bar after a certain period of inacticity

        setTimeout(() => {
            if (!scrolling) {
                navbar.classList.remove('sticky');
            }
        }, 200);
    } else {
        navbar.classList.remove('sticky');
        scrolling = false;
    }
}

window.addEventListener('scroll', stickyNavbar);


// *** email validation *** //
function emailValidation(userInput) {
    var mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userInput.value.match(mailFormat)) {
        document.contact-form.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.contact-form.email.focus();
        return false;
    }
}


// *** email-js *** //
// Using email js to handle form submissions directly to my email
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('aI7QUWYpkLZMaCxeG');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}