// alterna estilo do link se ele estiver ativo
function toggleLink(item) {
    document.location.href.includes(item.href) ? item.classList.add("ativo") : item.classList.remove("ativo") 
}

export { toggleLink };
