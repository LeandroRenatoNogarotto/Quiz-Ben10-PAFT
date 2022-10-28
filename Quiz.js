function comecar() {
    let nome = document.querySelector('#nome');
    console.log(nome.value);
    window.location.href='Quiz.html'
}

let timer = document.querySelector('#timer');
timer.innerHTML = 15;
function updateTimer(){
    timer.innerHTML--;
    if(timer.innerHTML <= 0 && pergAtiva == true){
        verifica_questao(-1);
    }
    else if(timer.innerHTML <= 0 && numero_questao < listaPerguntas.length - 1)
        proxima_questao();
    else if(timer.innerHTML <= 0){
        clearInterval(t);
        document.body.querySelector('header').style.opacity = 0.8;
        document.body.querySelector('main').style.opacity = 0.3;
        document.body.querySelector('section').style.opacity = 0.3;
        mostrar_pontuacao();
    }
    
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
let vetor_questoes_passadas = new Array();

function inicia_questao(n) {
    enunciado.innerHTML = listaPerguntas[n].pergunta;
    resposta1.innerHTML = listaPerguntas[n].r1;
    resposta2.innerHTML = listaPerguntas[n].r2;
    resposta3.innerHTML = listaPerguntas[n].r3;
    resposta4.innerHTML = listaPerguntas[n].r4;
    imagem.src = listaPerguntas[n].img;
    for(let i = 0; i < listaRespostas.length; i++){
        listaRespostas[i].style.opacity = 1; 
    }
}

function questao_aleatoria(vetor_questoes_passadas)
{
    numero_questao = Math.floor(Math.random() *5 + 1);
    for(let i = 0; i < vetor_questoes_passadas.length; i++)
    {
        if(vetor_questoes_passadas[i] == numero_questao)
        questao_aleatoria(vetor_questoes_passadas);
    }
    vetor_questoes_passadas.push(numero_questao);
    inicia_questao(numero_questao);
}

function proxima_questao(){
    timer.innerHTML = 15;
    questao_aleatoria(vetor_questoes_passadas);
    pergAtiva = true;
}

questao_aleatoria(vetor_questoes_passadas);

let pergAtiva = true;
function verifica_questao(resposta){
    if(!pergAtiva)
        return 0;
    pergAtiva = false;
    if(resposta === listaPerguntas[numero_questao].gabarito){
        pontuacao++;
    }    
    console.log("Pontuacao: " + pontuacao);
    for(let i = 0; i < listaRespostas.length; i++){
        if(listaPerguntas[numero_questao].gabarito - 1 != i)
            listaRespostas[i].style.opacity = 0.5; 
    }
    timer.innerHTML = 5;    
}

function mostrar_pontuacao(){
    let div = document.createElement('div');
    div.id = 'div-fundo'
    
    let card = document.createElement('div');
    card.id = "div-card";
    div.style.position = 'fixed'; 
    div.appendChild(card);

    let tituloP = document.createElement('h2');
    tituloP.innerText = "Pontuação";
    card.appendChild(tituloP);

    let texto = document.createElement('p');
    texto.innerHTML = 'Questões corretas: ' + pontuacao;
    card.appendChild(texto);

    let botao = document.createElement('button');
    botao.innerHTML = 'voltar';
    botao.addEventListener('click', function(){ window.location.href='Home.html'; })
    card.appendChild(botao);

    document.body.appendChild(div);
}
