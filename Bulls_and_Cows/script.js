let jogoGanho = false
let senha = ""
let tentativas = []
let numTent = 1
function novoJogo() {
    do {
        senha = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    } while (new Set(senha).size != 4)

    jogoGanho = false
    tentativas = []
    const divTable = document.getElementById("table")
    divTable.innerHTML = ""
    let divNumTen = document.createElement("div")
    divNumTen.id = "num-ten"
    let divTen = document.createElement("div")
    divTen.id = "ten"
    let divResp = document.createElement("div")
    divResp.id = "resp"

    divTable.append(divNumTen)
    divTable.append(divTen)
    divTable.append(divResp)
    alert("Novo jogo iniciado, adivinhe a senha")
}

function chutar(){
    if(senha == ""){
        alert("Inicie um novo jogo!")
        return;
    }

    if(jogoGanho){
        alert("Você já acertou, inicie um novo jogo!\nsenha: " + senha)
        return;
    }

    const inputTent = document.getElementById("tent").value
    
    if (isNaN(parseInt(inputTent))){
        alert("Insira apenas números")
        return;
    }

    if((inputTent.length < 4)){
        alert("Insira 4 dígitos!")
        return;
    }

    if(new Set(inputTent).size != 4){
        alert("Informe valores únicos!")
        return;
    }

    let bullCont = 0
    let cowCont = 0
    
    let indx = 0
    for(let x of inputTent){
        
        
        let indy = 0
        for(let y of senha){
            if(x==y){

                if(indx == indy){
                    bullCont++
                }else{
                    cowCont++
                }
            }
            indy++
        }
        indx ++
    }

    if(bullCont == 4){
        alert("Você acertou!\nA senha era: " + senha)
        jogoGanho = true
    }
    
    let resp = `${bullCont}B${cowCont}V`
    tentativas.push([numTent,inputTent,resp])
    numTent++

    listarTentatvas(tentativas)
}

function listarTentatvas(tentativas){

    const divTable = document.getElementById("table")
    divTable.innerHTML = ""
    let divNumTen = document.createElement("div")
    divNumTen.id = "num-ten"
    let divTen = document.createElement("div")
    divTen.id = "ten"
    let divResp = document.createElement("div")
    divResp.id = "resp"

    divTable.append(divNumTen)
    divTable.append(divTen)
    divTable.append(divResp)

    const divNumTentElement = document.getElementById("num-ten")
    const divTentElement = document.getElementById("ten")
    const divRespElement = document.getElementById("resp")


    for (let i = tentativas.length - 1; i >= 0; i--) {
        
        let newDivNumTent = document.createElement('div')
        newDivNumTent.classList.add('item')
    
        let newPnumTent = document.createElement('p')
        newPnumTent.textContent = tentativas[i][0]
        newDivNumTent.append(newPnumTent)
    
        divNumTentElement.append(newDivNumTent)
        // proximo
    
        let newDivTent = document.createElement('div')
        newDivTent.classList.add('item')
    
        let newPTent = document.createElement('p')
        newPTent.textContent = tentativas[i][1]
        newDivTent.append(newPTent)
        
        divTentElement.append(newDivTent)
    
        // proximo
    
        let newDivResp = document.createElement('div')
        newDivResp.classList.add('item')
    
        let newPResp = document.createElement('p')
        newPResp.textContent = tentativas[i][2]
        newDivResp.append(newPResp)
        
        divRespElement.append(newDivResp)
    }
    
}

function comoJogar(){
    const help = document.getElementById('help')
    
    let divHelp = document.createElement('div')
    divHelp.classList.add('desc-jogo')

    let br = document.createElement('br')
    
    let h2Help = document.createElement('h2')
    h2Help.textContent = "Como jogar?"

    let pHelp = document.createElement('p')
    pHelp.textContent = "O jogo Bois e Vacas consiste em você adivinhar qual a senha" +
                    "gerada pelo sistema a partir de seu raciocínio lógico. \n\n" +
                    
                    "Dê um chute e analíse a resposta de seu chute.\n\n" +

                    "- 'B' significa que você acertou um número na posição correta \n" +
                    "Exemplo: Se a senha gerada for '1234' e você chutar '0256', terá como resposta " +
                    "'1B0V', pois acertou um número e na posição exata ( Nesse caso o número 2 ).\n\n" +

                    "- 'V' siginifica que você acertou algum número, mas na posição errada. \n" +
                    "Exemplo: Se a senha gerada for '1234' e você chutar '2056', terá como resposta " +
                    "'0B1V', pois acertou um número, mas na posição errada ( Nesse caso o número 2 ).\n\n" +

                    "Obs: Você só pode inserir valores únicos. \n" +
                    "Bom jogo!"

    let btnEntendi = document.createElement('button')
    btnEntendi.innerHTML = "Entendi"
    btnEntendi.onclick = ()=>{
        divHelp.remove()
    }

    divHelp.append(h2Help)
    divHelp.append(pHelp)
    divHelp.append(btnEntendi)

    help.append(divHelp)
}