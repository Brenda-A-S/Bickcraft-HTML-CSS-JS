// seleciona o produto automaticamente com base nos parametros da url
function handleSelect() {
    const params = new URLSearchParams(location.search)
    
    function selectItem(item) {
        const element = document.getElementById(item)
        if(element){
            element.checked = true
        }
    }
    
    params.forEach(selectItem)    
}

export { handleSelect };