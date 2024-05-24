const hamb = document.querySelector("#hamb");
const hamb_link = document.querySelectorAll("ul.side li");
const body = document.body;
const sideNav = document.querySelector(".side")


function checkMediaQuery() {
    return window.matchMedia("(max-width: 767px)").matches;
}

hamb.addEventListener("click", function(e) {
    sideNav.classList.toggle("active");
    hamb.style.display = "none";
    e.stopPropagation(); 
});

body.addEventListener("click", function() {
    if (checkMediaQuery() && sideNav.classList.contains("active")) {
        sideNav.classList.remove("active");
        hamb.style.display = "contents";
    }
});

sideNav.addEventListener("click", function(e) {
    e.stopPropagation(); 
});


