// import { atividades } from "./atividades.js"
const atividades = require('./atividades')
const OlElement = document.getElementById('atvs')
console.log(`teste 1`);

OlElement.onload = ()=>{
    console.log(`teste 2`);
    for (const atividade of atividades) {
        let liElement = document.createElement('li')
        let h2Element = document.createElement('h2')
        let pElement = document.createElement('p')
        let pLinkElement = document.createElement('p')
        let aElement = document.createElement('a')

        h2Element.textContent = atividade.titulo

        pElement.textContent = atividade.descricao

        aElement.href = atividade.url
        aElement.textContent = 'Clique aqui'
        pLinkElement.textContent  = `${aElement} para visualizar`

        liElement.classList.add(`listas-atividades`)

        liElement.appendChild(h2Element)
        liElement.appendChild(pElement)
        liElement.appendChild(pLinkElement)

        OlElement.appendChild(liElement)
    }


}