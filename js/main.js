import { rolar_carrossel_back,rolar_carrossel_next } from "./carrossel.js";

const botao_next = document.querySelector(".botao__next");
const botao_back = document.querySelector(".botao__back");



botao_next.addEventListener("click",rolar_carrossel_next)

botao_back.addEventListener("click",rolar_carrossel_back)