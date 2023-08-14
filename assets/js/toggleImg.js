// const currentImg = document.querySelector()

function toggleClick(event) {
    const clicked = event.currentTarget
    const currentImg = clicked.p
    console.log(currentImg)
    // clicked.src
}

function toggleImg(imagem) {
    imagem.addEventListener('click', toggleClick)
}

export { toggleImg };