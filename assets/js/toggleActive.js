// alterna classe ativa de display com base no event click
function toggleClass(event) {
    const element = event.currentTarget
    const controls = element.getAttribute("aria-controls")
    const id = document.getElementById(controls)

    id.classList.toggle("ativa")
    const active = id.classList.contains("ativa")
    element.setAttribute("aria-expanded", active)
}

// ao click chama a função para alternar estados
function toggleActive(element) {
    element.addEventListener("click", toggleClass)
}

export { toggleActive };