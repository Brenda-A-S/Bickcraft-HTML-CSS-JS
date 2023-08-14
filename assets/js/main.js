import { handleToTop } from './handleToTop.js';
import { toggleVisibility } from './toggleVisibility.js';
import { toggleImg } from './toggleImg.js';
import { toggleLink } from './toggleLink.js';
import { handleSelect } from './handleSelect.js';

const btntop = document.querySelector('a.top')
// ao evento de scroll ele chama a função que altera visibilidade do botao
window.addEventListener("scroll", (event)=> {
    toggleVisibility(btntop)
})
// ao evento de click no botao ele chama a função de voltar ao topo
btntop.addEventListener("click", handleToTop)


// 
const imgs = document.querySelectorAll('.bicicleta-imgs img')
imgs.forEach(toggleImg)


const menu = document.querySelectorAll('nav a')
// acessa minha lista de links de navegação e chama a função que alterna estilo ativo
menu.forEach(toggleLink);

handleSelect()
