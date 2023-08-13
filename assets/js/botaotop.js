const btntop = document.querySelector('a.top')

window.addEventListener("scroll", function (event) {
    if (scrollY == 0) {
        btntop.classList.remove("visible");
    } else {
        btntop.classList.add("visible");
    }
})

btntop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})