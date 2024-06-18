// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
    enunciado: "Qual dessas opções você escolheria para uma sexta a noite? ",
        alternativas: [
        { //alternativa 1
            texto: "Sair para um bar",
            afirmacao: "Afirmação"
        },
        { //alternativa 2
            texto: "Ficar em casa vendo série",
            afirmacao: "Afirmação",
        },
        { //alternativa 3
            texto: "Sair para um restaurante, e degustar um bom vinho",
            afirmacao: "Afirmação",
        },
        { //alternativa 4
            texto: "Ouvindo música e desenhando",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Qual dessas cidades você escolhe?",
        alternativas: [
        {
            texto: "Nova orleans",
            afirmacao: "Afirmação"
        },
        {
            texto: "Mystic falls",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Pergunta 3",
        alternativas: [
        {
            texto: "Bla bla bla bla",
            afirmacao: "Afirmação"
        },
        {
            texto: "Endauldi agrummgit",
            afirmacao: "Afirmação",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //variável marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto

function mostraPergunta(){ //função que faz aparecer a pergunta
    perguntaAtual = perguntas[atual]; //declara a variável
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();