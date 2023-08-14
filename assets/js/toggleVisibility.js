// altera visibilidade de um elemento
function toggleVisibility(element) {
    scrollY === 0 ? element.classList.remove("visible") : element.classList.add("visible");
}

export { toggleVisibility };