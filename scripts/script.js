// const navbar = document.querySelector("header");

// function stickyNavbar() {
//     if (window.scrollY > 0) {    
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');    
//     }

//     if (window.scrollY === 0) {
//         navbar.classList.remove('sticky');
//     }
// }


// window.addEventListener('scroll', stickyNavbar);


// window.addEventListener("scroll", () => {
//     const header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

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