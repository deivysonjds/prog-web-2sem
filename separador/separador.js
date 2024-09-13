const btnSeparar = document.getElementById('btnsep')
const palavraInput = document.getElementById('plv')
const divPlvSeparada = document.getElementById('plv-sep')

btnSeparar.onclick = ()=>{
    let palavra = palavraInput.value
    divPlvSeparada.innerHTML = ''

    for (let letra of palavra){
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.textContent = letra
        p.classList.add('ltr-p')
        div.classList.add('ltr-div')
        div.appendChild(p)

        divPlvSeparada.appendChild(div)
    }
}
