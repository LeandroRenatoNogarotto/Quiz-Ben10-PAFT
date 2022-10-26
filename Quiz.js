function comecar() {
    let nome = document.querySelector('#nome');
    console.log(nome.value);
    window.location.href='Quiz.html'
}

let timer = document.querySelector('#timer');
function updateTimer(){
    console.log(timer.innerHTML);
    timer.innerHTML--;
    if(timer.innerHTML <= 0)
        clearInterval(t);
}
let t = setInterval(updateTimer, 1000);

const questao1 = {
    pergunta: "Qual o nome completo do Ben 10?",
    r1: "Benjamin Kirby Tennyson",
    r2: "Robert Souza Tennyson",
    r3: "Ben Silva Tennyson",
    r4: "Benio Tenia Neves",
    img: "./Images/ben10.jpg"
}
const questao2 = {
    pergunta: "Qual o parentesco da Gwen Tennyson com o Ben 10?",
    r1: "Prima",
    r2: "Irma",
    r3: "Amiga",
    r4: "Namorada",
    img: "./Images/gwen.webp"
}
const questao3 = {
    pergunta: "Qual o nome correto do alien da figura abaixo?",
    r1: "XLR8",
    r2: "XRL80",
    r3: "CB160",
    r4: "RTX1080",
    img: "./Images/XLR8.webp"
}
const questao4 = {
    pergunta: "Qual o nome do alien da figura abaixo?",
    r1: "Massa Cinzenta",
    r2: "XLR8",
    r3: "Ultra-T",
    r4: "Insectóide",
    img: "./Images/ultraT.jpg"
}
const questao5 = {
    pergunta: "Qual desses é um vilão do Ben 10?",
    r1: "Vilgax",
    r2: "Toguro",
    r3: "Alfred",
    r4: "Aku",
    img: "./Images/ben102.jpg"
}

let listaPerguntas = [questao1, questao2, questao3, questao4, questao5];
let enunciado = document.querySelector('#pergunta');
let resposta1 = document.querySelector('#resp1');
let resposta2 = document.querySelector('#resp2');
let resposta3 = document.querySelector('#resp3');
let resposta4 = document.querySelector('#resp4');
let imagem = document.querySelector('#imagem');

function inicia_questao(n) {
    enunciado.innerHTML = listaPerguntas[n-1].pergunta;
    resposta1.innerHTML = listaPerguntas[n-1].r1;
    resposta2.innerHTML = listaPerguntas[n-1].r2;
    resposta3.innerHTML = listaPerguntas[n-1].r3;
    resposta4.innerHTML = listaPerguntas[n-1].r4;
    imagem.src = listaPerguntas[n-1].img;
}

inicia_questao(1);
