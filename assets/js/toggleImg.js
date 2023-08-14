// const currentImg = document.querySelector()
function toggleImgClick(event, element) {
    const img = event.currentTarget
    const media = matchMedia('(min-width:920px)').matches
    if(media){
        element.prepend(img)
    }
}

function toggleImg(img, element) {
    img.addEventListener('click', (event) => {
        toggleImgClick(event, element)
    })
}

export { toggleImg, toggleImgClick };