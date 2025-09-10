const mover_imagens = document.querySelector(".carrossel__imagens");
const img = mover_imagens.querySelector("img");
const total_imagens = document.querySelectorAll(".carrossel__imagens div img").length;
const viewport = document.querySelector(".carrossel__viewport");

const preto_lateral = document.querySelector(".carrossel__viewport");
const botao_next = document.querySelector(".botao__next");
const botao_back = document.querySelector(".botao__back");


let item_width = img.clientWidth + 50;
let passo = item_width * 3;
let posicao_atual = 0;
let largura_totaL = total_imagens * item_width;
let largura_viewport = viewport.getBoundingClientRect().width;
let max_scroll = largura_totaL - largura_viewport;

function atualizar_visibilidade(){
    if(posicao_atual === 0){
        botao_back.classList.remove("active");
        preto_lateral.classList.remove("active__left");
    }else{
        botao_back.classList.add("active");
        preto_lateral.classList.add("active__left");        
    }

    if(posicao_atual <= -max_scroll){
        botao_next.classList.remove("active");
        preto_lateral.classList.remove("active__right");
    }else{
        botao_next.classList.add("active");
        preto_lateral.classList.add("active__right");        
    }
}

function recalcular_valores(){
    item_width = img.clientWidth + 50;
    passo = item_width * 3;
    posicao_atual = 0;
    largura_totaL = total_imagens * item_width;
    largura_viewport = viewport.getBoundingClientRect().width;
    max_scroll = largura_totaL - largura_viewport;

    mover_imagens.style.transform = `translateX(0px)`;

    atualizar_visibilidade();
}

function rolar_carrossel_next(){
    let proxima_posicao = posicao_atual - passo;

    if(Math.abs(proxima_posicao) > max_scroll){
        proxima_posicao = -max_scroll;
    }

    posicao_atual = proxima_posicao;
    mover_imagens.style.transform = `translateX(${posicao_atual}px)`;
    
    atualizar_visibilidade();
}

function rolar_carrossel_back(){
    let proxima_posicao = posicao_atual + passo;

    if(proxima_posicao > 0){
        proxima_posicao = 0;
    }

    posicao_atual = proxima_posicao;
    mover_imagens.style.transform = `translateX(${posicao_atual}px)`;

    atualizar_visibilidade();
}

atualizar_visibilidade();

let tempo_espera;

window.addEventListener("resize", () => {
    clearTimeout(tempo_espera);
    tempo_espera = setTimeout(recalcular_valores,250);
})


export {rolar_carrossel_back,rolar_carrossel_next};