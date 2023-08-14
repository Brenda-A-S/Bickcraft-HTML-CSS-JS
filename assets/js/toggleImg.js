const galeryContainer = document.querySelector('.bicicleta-imgs');

// const currentImg = document.querySelector()
function toggleImgClick(event) {
    const img = event.currentTarget
    const media = matchMedia('(min-width:920px)').matches
    if(media){
        galeryContainer.prepend(img)
    }
}

function toggleImg(img) {
    img.addEventListener('click', toggleImgClick)
}

export { toggleImg };