const palavras = [
    "amor", "brisa", "carro", "dia", "escola",
    "feliz", "gato", "homem", "ilha", "joia",
    "luz", "mato", "navio", "olho", "paz",
    "quadro", "rosa", "sol", "tempo", "urso",
    "vaca", "agua", "bola", "casa", "dado",
    "elefante", "fogo", "gelo", "horta","inseto",
    "jogo", "lua", "mundo", "nuvem", "oculo",
    "pato", "quente", "rua", "sapo", "tigre",
    "uva", "vila", "abacaxi", "bola", "cachorro",
    "dente", "estrela", "feira", "girafa", "homem",
    "ilha", "jacare", "kilo", "livro", "mesa",
    "navio", "olho", "pao", "quadro", "rosa",
    "sabao", "taco", "urso", "vaca", "zebra",
    "abajur", "banco", "caderno", "dente", "escola",
    "festa", "gato", "higiene", "iguana", "janela",
    "ketchup", "lago", "moto", "navio", "oculos",
    "pasta", "quadro", "rosto", "sol", "tigre",
    "urso", "vassoura", "vela", "xaxim", "yoga",
    "zebra"
  ]

let palavraJogo = ''
let tentativas = 0
let letrasCertas = 0
let erros = 0
let listLetrasChutadas = []

function iniciarNovoJogo(){
    let indexPalavra = Math.floor(Math.random() * palavras.length)
    const divLetras = document.getElementById('ltr')
    divLetras.innerHTML = ''
    const divLenPalavra = document.getElementById('len-plv')
    divLenPalavra.innerHTML = ''
    const divLetrasTentList = document.getElementById('ltr-ch-lst')
    divLetrasTentList.innerHTML = ''
    const divTentativas = document.getElementById('tnt-ch')
    divTentativas.innerHTML = ''
    const divErros = document.getElementById('erros')
    divErros.innerHTML = ''
    
    let pLenPalavra = document.createElement('p')
    pLenPalavra.id = 'ltr-tnt'
    pLenPalavra.textContent = `Palavra com ${palavras[indexPalavra].length} letras`
    
    
    divLenPalavra.appendChild(pLenPalavra)
    palavraJogo = palavras[indexPalavra]
    
    for (let letra in palavraJogo){
        let divLetra = document.createElement('div')
        divLetra.classList.add('div-let-sp')
        
        divLetras.appendChild(divLetra)
    }
    
    listLetrasChutadas = []
    tentativas = 0
    letrasCertas = 0
    erros = 0
    
    let pTentativas = document.createElement('p')
    pTentativas.id = 'txt-tnt'
    pTentativas.textContent = `Tentativas: ${tentativas}`
    divTentativas.appendChild(pTentativas)

    let pErros = document.createElement('p')
    pErros.id = 'txt-er'
    pErros.textContent = `Erros: ${erros}`
    divErros.appendChild(pErros)
}

function chutar(){
    if (erros >= 5){
        alert(`Você perdeu, reinicie o jogo\nA palavra era ${palavraJogo}`)
        return;
    }

    const pTentativasCh = document.getElementById('txt-tnt')
    const letraChuteInput = document.getElementById('ltr-ch')
    const letrasOcultasDiv = document.querySelectorAll('.div-let-sp')
    
    if (!pTentativasCh){
        alert('Inicie o jogo antes de tentar um chute.')
        letraChuteInput.value = ''
        letraChuteInput.focus()
        return;
    }
    
    if(palavraJogo.length == letrasCertas){
        alert('Você já acertou a palavra! Reinicie o Jogo!')
        letraChuteInput.value = ''
        letraChuteInput.focus()
        return;
    }

    if (!letraChuteInput.value){
        alert('Informe uma letra!')
        letraChuteInput.focus()
        return;
    }

    let letraInList = listLetrasChutadas.find((letra)=>{
        return letra == letraChuteInput.value
    })
    
    if (letraInList != undefined){
        alert('A letra já foi chutada, informe outra.')
        letraChuteInput.value = ''
        letraChuteInput.focus()
        return
    }

    let countIndex = 0
    let chuteErrado = true
    for (let letra of palavraJogo){
        if (letra == letraChuteInput.textContent.toLowerCase()){
            let pLetraChute = document.createElement('p')
            pLetraChute.classList.add('ltr-ch-crt')
            pLetraChute.textContent = letraChuteInput.value

            letrasOcultasDiv[countIndex].appendChild(pLetraChute)
            letrasCertas++
            chuteErrado = false
        }
        countIndex++
    }

    if (chuteErrado){
        erros++
        if (erros>=5) {
            alert(`Você perdeu, reinicie o jogo\nA palavra era ${palavraJogo}`)
            return
        }
    }
    

    if(palavraJogo.length == letrasCertas){
        alert('Você acertou a palavra! Bom trabalho')
    }

    const divLetrasTent = document.getElementById('ltr-ch-lst')

    if (tentativas == 0){
        let divTextLetraTen = document.createElement('div')
        let pTextLetraTent = document.createElement('p')
        pTextLetraTent.id = 'txt-ltr-ch'
        pTextLetraTent.textContent = 'Letras chutadas: '
        divTextLetraTen.appendChild(pTextLetraTent)
        divLetrasTent.appendChild(divTextLetraTen)
    }
    
    let divLetraTent = document.createElement('div')
    divLetraTent.classList.add('ltr-ch-div')
    
    let pLetraTent = document.createElement('p')
    pLetraTent.classList.add('ltr-ch-p')
    pLetraTent.textContent = letraChuteInput.value

    divLetraTent.appendChild(pLetraTent)
    divLetrasTent.appendChild(divLetraTent)

    listLetrasChutadas.push(letraChuteInput.value)
    tentativas++
    const pTentativas = document.getElementById('txt-tnt')
    pTentativas.textContent = `Tentativas: ${tentativas}`

    const pErro = document.getElementById('txt-er')
    pErro.textContent = `Erros: ${erros}`

    letraChuteInput.value = ''
    letraChuteInput.focus()
}