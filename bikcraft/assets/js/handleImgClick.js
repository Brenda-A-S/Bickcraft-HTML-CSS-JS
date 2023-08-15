// const currentImg = document.querySelector()
function addImgClickEventListener(event, element) {
    const img = event.currentTarget
    const media = matchMedia('(min-width:920px)').matches
    if (media) {
        element.prepend(img)
    }
}

function handleImgClick(img, element) {
    img.addEventListener('click', (event) => {
        addImgClickEventListener(event, element)
    })
}

export { handleImgClick };