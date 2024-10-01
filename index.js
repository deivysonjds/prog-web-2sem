// import { atividades } from "./atividades.js"
const OlElement = document.getElementById('atvs')

const atividades = [{
    titulo: "media querie",
    descricao: "desenvolver site utilizando media querie",
    url: "./media-queries/"
},
{
    titulo: "Somatório",
    descricao: "Fazer um site que soma valores ao clicar no botão",
    url: "./somatorio/"
},
{
    titulo: "Sorteio",
    descricao: "Criar um site de sorteio de números entre valores previamente especificados",
    url: "./sorteio/"
},
{
    titulo: "Objeto",
    descricao: "Criar um site que recebe valores e mostra na tela",
    url: "./objeto/"
},
{
    titulo: "Separador",
    descricao: "Criar um site que recebe uma palavra e mostra na tela de forma separada cada letra em uma div",
    url: "./separador/"
},
{
    titulo: "Jogo da forca",
    descricao: "Criar um site que seja um jogo da forca",
    url: "./jogoforca/"
},
{
    titulo: "Apis rest",
    descricao: "Criar 3 sites que renderizem informações de apis usando fetch",
    url: "./api-rest/"
}
]

document.addEventListener('DOMContentLoaded',()=>{
    
    for (const atividade of atividades) {
        
        let divElement = document.createElement('div')
        divElement.classList.add('div-atvs')
        let h2Element = document.createElement('h2')
        let pElement = document.createElement('p')
        let aElement = document.createElement('a')
        let button = document.createElement('button')
        button.classList.add('btn-ver-atv')
        button.textContent = 'Ver atividade'

        h2Element.textContent = atividade.titulo

        pElement.textContent = atividade.descricao

        aElement.href = atividade.url
        aElement.appendChild(button)

        divElement.classList.add(`listas-atividades`)

        divElement.appendChild(h2Element)
        divElement.appendChild(pElement)
        divElement.appendChild(aElement)

        OlElement.appendChild(divElement)
    }
})