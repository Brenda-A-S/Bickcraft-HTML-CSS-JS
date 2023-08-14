import { handleToTop } from './handleToTop.js';
import { toggleVisibility } from './toggleVisibility.js';

const btntop = document.querySelector('a.top')

// ao evento de scroll ele chama a função que altera visibilidade do botao
window.addEventListener("scroll", (event)=> {
    toggleVisibility(btntop)
})

// ao evento de click no botao ele chama a função de voltar ao topo
btntop.addEventListener("click", handleToTop)