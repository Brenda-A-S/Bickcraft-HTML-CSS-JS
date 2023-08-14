function toggleClass(event) {
    const element = event.currentTarget
    const controls = element.getAttribute("aria-controls")
    const id = document.getElementById(controls)

    id.classList.toggle("ativa")
    const active = id.classList.contains("ativa")
    element.setAttribute("aria-expanded", active)
}

function toggleActive(element) {
    element.addEventListener("click", toggleClass)
}

export { toggleActive };