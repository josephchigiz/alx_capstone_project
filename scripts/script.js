// const navbar = document.querySelector('#header');
// let top = navbar.offsetTop;

// function stickynavbar() {
//     if (window.scrollY >= top) {    
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');    
//     }
// }
// window.addEventListener('scroll', stickynavbar);

// window.addEventListener("scroll". function (){
//     var header =document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})