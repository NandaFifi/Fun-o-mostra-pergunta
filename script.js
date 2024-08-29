const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de assistir ao trailer de um filme futurista onde a Inteligência Artificial tem um papel central. Qual é o seu primeiro pensamento?",
        alternativas: [
            "Isso é incrível!",
            "Isso é preocupante"
        ]
    },
    {
        enunciado: "Você está pesquisando filmes sobre Inteligência Artificial para um trabalho acadêmico. Qual abordagem você usa para escolher o filme?",
        alternativas: [
            "Você optou por explorar filmes que apresentam uma visão profunda e crítica da IA.",
            "Você optou por explorar filmes que apresentam uma visão profunda e crítica da IA.",
        ]
    },
    {
        enunciado: "Após assistir a uma série de filmes sobre Inteligência Artificial, sua turma participa de um debate sobre como a IA é retratada no cinema. Qual é o seu ponto de vista?",
        alternativas: [
            "Você vê a IA nos filmes como uma força para o bem e um catalisador de mudanças positivas.",
            "Sua preocupação com as representações negativas levou você a considerar a necessidade de abordagens mais equilibradas e realistas."
        ]
    },
    {
        enunciado: "Você precisa criar um cartaz para um filme fictício sobre Inteligência Artificial. Qual ferramenta você usa para projetar o cartaz?",
        alternativas: [
            "Você se dedicou a criar um cartaz visualmente impressionante e criativo usando ferramentas tradicionais",
            "Você aproveitou a tecnologia de IA para gerar uma arte visualmente atraente e economizar tempo no processo criativo."
        ]
    },
    {
        enunciado: "Você e seu grupo estão criando um roteiro para um filme sobre biologia, e um membro do grupo usou IA para gerar o texto. O problema é que o roteiro gerado está muito parecido com o de outros filmes. O que você faz?",
        alternativas: [
           "Você acabou confiando na IA para criar o conteúdo, mas percebeu que isso limitou a originalidade do roteiro.",
            "Você reconheceu a importância de adicionar um toque pessoal ao roteiro e colaborou para garantir que o projeto fosse original e autêntico."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
