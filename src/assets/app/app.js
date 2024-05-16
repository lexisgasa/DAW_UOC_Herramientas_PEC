const hamb = document.querySelector("#hamb");
const hamb_link = document.querySelectorAll("ul.side li");
const body = document.body;
const sideNav = document.querySelector(".side")


hamb.addEventListener("click", function(event) {
    sideNav.classList.toggle("active");
    hamb.style.display = "none";
    event.stopPropagation(); // Evita que el clic se propague al body
});

body.addEventListener("click", function() {
    if (checkMediaQuery() && sideNav.classList.contains("active")) {
        sideNav.classList.remove("active");
        hamb.style.display = "contents";
    }
});



