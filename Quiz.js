function comecar() {
    let nome = document.querySelector('#nome');
    console.log(nome.value);
    window.location.href='Quiz.html'
}

let timer = document.querySelector('#timer');
function updateTimer(){
    timer.innerHTML--;
    if(timer.innerHTML <= 0)
        clearInterval(t);
}
let j = 5;
function updateAfter(){
    j--;
}
let t = setInterval(updateTimer, 1000);

const questao1 = {
    pergunta: "Qual o nome completo do Ben 10?",
    r1: "Benjamin Kirby Tennyson",
    r2: "Robert Souza Tennyson",
    r3: "Ben Silva Tennyson",
    r4: "Benio Tenia Neves",
    gabarito: 1,
    img: "./Images/ben10.jpg"
}
const questao2 = {
    pergunta: "Qual o parentesco da Gwen Tennyson com o Ben 10?",
    r1: "Prima",
    r2: "Irma",
    r3: "Amiga",
    r4: "Namorada",
    gabarito: 1,
    img: "./Images/gwen.webp"
}
const questao3 = {
    pergunta: "Qual o nome correto do alien da figura abaixo?",
    r1: "XLR8",
    r2: "XRL80",
    r3: "CB160",
    r4: "RTX1080",
    gabarito: 1,
    img: "./Images/XLR8.webp"
}
const questao4 = {
    pergunta: "Qual o nome do alien da figura abaixo?",
    r1: "Ultra-T",
    r2: "XLR8",
    r3: "Massa Cinzenta",
    r4: "Insectóide",
    gabarito: 1,
    img: "./Images/ultraT.jpg"
}
const questao5 = {
    pergunta: "Qual desses é um vilão do Ben 10?",
    r1: "Vilgax",
    r2: "Toguro",
    r3: "Alfred",
    r4: "Aku",
    gabarito: 1,
    img: "./Images/ben102.jpg"
}

let listaPerguntas = [questao1, questao2, questao3, questao4, questao5];
let enunciado = document.querySelector('#pergunta');
let resposta1 = document.getElementById('resp1');
let resposta2 = document.querySelector('#resp2');
let resposta3 = document.querySelector('#resp3');
let resposta4 = document.querySelector('#resp4');
let listaRespostas = [resposta1, resposta2, resposta3, resposta4];
let imagem = document.querySelector('#imagem');
let pontuacao = 0;
let numero_questao = 0;

function inicia_questao(n) {
    enunciado.innerHTML = listaPerguntas[n].pergunta;
    resposta1.innerHTML = listaPerguntas[n].r1;
    resposta2.innerHTML = listaPerguntas[n].r2;
    resposta3.innerHTML = listaPerguntas[n].r3;
    resposta4.innerHTML = listaPerguntas[n].r4;
    imagem.src = listaPerguntas[n].img;
}

inicia_questao(numero_questao);

function verifica_questao(resposta){
    if(resposta === listaPerguntas[numero_questao].gabarito){
        pontuacao++;
    }
    /* deixa em cinza as questoes erradas
    for(let i = 0; i < listaRespostas.length; i++){
        if(numero_questao != i)
            listaRespostas[i].style.backgroundColor = 'rgba(117, 108, 108, 0.699)'; 
    }
    */
    clearInterval(t);
    j = 5;
    let o = setInterval(updateTimer, 1000);
    
    if(numero_questao < 4){
        console.log("Resposta: " + resposta);
        console.log("Gabarito: " + listaPerguntas[numero_questao].gabarito);
        console.log("Pontuacao: " + pontuacao);

        timer.innerHTML = 20;
        t = setInterval(updateTimer, 1000);
        inicia_questao(++numero_questao);
    }
}