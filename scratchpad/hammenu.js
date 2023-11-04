
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function myFunction() {
    var x = document.getElementById("navPane");
    if (x.className == "nav-pane") {
        x.className += " responsive";
    } else {
        x.className = "nav-pane";
    }
}