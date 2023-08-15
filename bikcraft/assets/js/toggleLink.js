// alterna estilo do link se ele estiver ativo
function toggleLink(item) {
    if (document.location.href.includes(item.href)) {
        item.classList.add("ativo")
    }
}

export { toggleLink };
