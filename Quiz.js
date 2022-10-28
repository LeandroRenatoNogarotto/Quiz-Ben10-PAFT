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
    respostas: embaralha_lista(["Benjamin Kirby Tennyson", "Robert Souza Tennyson", "Ben Silva Tennyson", "Benio Tenia Neves"]),
    img: "./Images/ben10.jpg"
}
questao1.gabarito = questao1.respostas.indexOf('Benjamin Kirby Tennyson') + 1;

const questao2 = {
    pergunta: "Qual o parentesco da Gwen Tennyson com o Ben 10?",
    respostas: embaralha_lista(["Prima", "Irma", "Amiga", "Namorada"]),
    gabarito: 1,
    img: "./Images/gwen.webp"
}
questao2.gabarito = questao2.respostas.indexOf('Prima') + 1;

const questao3 = {
    pergunta: "Qual o nome correto do alien da figura abaixo?",
    respostas: embaralha_lista(["XLR8", "XRL80", "CB160", "RTX1080"]),
    gabarito: 1,
    img: "./Images/XLR8.webp"
}
questao3.gabarito = questao3.respostas.indexOf('XLR8') + 1;

const questao4 = {
    pergunta: "Qual o nome do alien da figura abaixo?",
    respostas: embaralha_lista(["Ultra-T", "XLR8", "Massa Cinzenta", "Insectóide"]),
    gabarito: 1,
    img: "./Images/ultraT.jpg"
}
questao4.gabarito = questao4.respostas.indexOf('Ultra-T') + 1;

const questao5 = {
    pergunta: "Qual desses é um vilão do Ben 10?",
    respostas: embaralha_lista(["Vilgax", "Toguro", "Alfred", "Aku"]),
    gabarito: 1,
    img: "./Images/ben102.jpg"
}
questao5.gabarito = questao5.respostas.indexOf('Vilgax') + 1;

function embaralha_lista(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function embaralha_respostas(){
    listaPerguntas[0].gabarito = respostas.indexOf("Benjamin Kirby Tennyson");
}

let listaPerguntas = embaralha_lista([questao1, questao2, questao3, questao4, questao5]);
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
    resposta1.innerHTML = listaPerguntas[n].respostas[0];
    resposta2.innerHTML = listaPerguntas[n].respostas[1];
    resposta3.innerHTML = listaPerguntas[n].respostas[2];
    resposta4.innerHTML = listaPerguntas[n].respostas[3];
    imagem.src = listaPerguntas[n].img;
    for(let i = 0; i < listaRespostas.length; i++){
        listaRespostas[i].style.opacity = 1; 
    }
}

function proxima_questao(){
    timer.innerHTML = 15;
    inicia_questao(++numero_questao);
    pergAtiva = true;
}

inicia_questao(numero_questao);

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
