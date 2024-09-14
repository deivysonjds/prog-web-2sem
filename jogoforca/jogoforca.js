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

function iniciarNovoJogo(){
    let indexPalavra = Math.floor(Math.random() * palavras.length)
    const divLetras = document.getElementById('ltr')
    divLetras.innerHTML = ''
    const divLenPalavra = document.getElementById('len-plv')
    divLenPalavra.innerHTML = ''
    const divTentativas = document.getElementById('tnt-ch')
    divTentativas.innerHTML = ''

    
    let pLenPalavra = document.createElement('p')
    pLenPalavra.id = 'ltr-tnt'
    pLenPalavra.textContent = `Palavra com ${palavras[indexPalavra].length} letras`
    
    let pTentativas = document.createElement('p')
    pTentativas.id = 'txt-tnt'
    pTentativas.textContent = `Tentativas: ${tentativas}`
    divTentativas.appendChild(pTentativas)

    divLenPalavra.appendChild(pLenPalavra)
    palavraJogo = palavras[indexPalavra]

    for (let letra in palavraJogo){
        let divLetra = document.createElement('div')
        divLetra.classList.add('div-let-sp')

        divLetras.appendChild(divLetra)
    }
}

function chutar(){
    const pTentativasCh = document.getElementById('txt-tnt')
    
    console.log(pTentativasCh);
}