const inputNumerMenor = document.getElementById('menorvalor')
const inputNumerMaior = document.getElementById('maiorvalor')
const btnSortear = document.getElementById('sorteioSR')
const inputNumSorteado = document.getElementById('numSorteado')
const inputListNumSorteado = document.getElementById('numSorteadoList')

let listNumSorteados = []

let numInListFind, sorteadoNum
btnSortear.onclick = ()=>{

    let maximoDeNumeros = parseInt(inputNumerMaior) - parseInt(inputNumerMenor) + 1
    
    if (listNumSorteados.length >= maximoDeNumeros){
        alert('Todo os números já foram sorteados')
        return;
    }

    if (parseInt(inputNumerMaior.value) < parseInt(inputNumerMenor.value)){
        alert('O segundo número não pode ser menor que o primeiro')
        return;
    }
    
    do {
        sorteadoNum = Math.trunc((Math.random() * (parseInt(inputNumerMaior.value) - parseInt(inputNumerMenor.value) +1) + parseInt(inputNumerMenor.value)))
        
        function numInList(numInList){
            return numInList === sorteadoNum
        }
        
        numInListFind = listNumSorteados.find(numInList)
        
    } while (numInListFind != undefined);

    listNumSorteados.push(sorteadoNum)

    inputNumSorteado.value = sorteadoNum

    let textInputSorteadosList = ''
    for (let num of listNumSorteados){
        if (textInputSorteadosList === ''){
            textInputSorteadosList = `${textInputSorteadosList}${num}`
            continue
        }
        textInputSorteadosList = `${textInputSorteadosList},${num}`

    }
    
    inputListNumSorteado.value = textInputSorteadosList
}