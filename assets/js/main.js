import { handleToTop } from './handleToTop.js';
import { toggleVisibility } from './toggleVisibility.js';
import { handleImgClick } from './handleImgClick.js';
import { toggleLink } from './toggleLink.js';
import { toggleActive } from './toggleActive.js';
import { autoSelectProduct } from './autoSelectProduct.js';
import './plugins/simple-anime.js';

// ALTERNAR VISIBILIDADE COM O SCROLL
const btntop = document.querySelector('a.top')
// ao evento de scroll ele chama a função que altera visibilidade do botao
window.addEventListener("scroll", (event) => {
    toggleVisibility(btntop, 'visivel')
})


// VOLTAR AI TOPO
// ao evento de click no botao ele chama a função de voltar ao topo
btntop.addEventListener("click", handleToTop);


// ALTERNAR IMAGEM
const galeryContainer = document.querySelector('.bicicleta-imgs');
const galery = document.querySelectorAll('.bicicleta-imgs img');
// chama a função que alterna a imagem da galeria
galery.forEach((img) => handleImgClick(img, galeryContainer));


// TORNAR LINK ATIVO
const menu = document.querySelectorAll('nav a');
// acessa minha lista de links de navegação e chama a função que alterna estilo ativo
menu.forEach(toggleLink);


// SELECIONAR PRODUTO AUTO
// chama a função que seleciona o produto automaticamente
autoSelectProduct();


// ALTERNAR DISPLAY
const questions = document.querySelectorAll('.perguntas button')
// chama a função para alternar o display com o click
questions.forEach(toggleActive)

if(window.SimpleAnime){
    new SimpleAnime();
}