const btnadd = document.getElementById('add')
const sum = document.getElementById('sum')
const number = document.getElementById('number')
const inputMedia = document.getElementById('media')
const inputNumdig = document.getElementById('numdig')
const btnClear = document.getElementById('clear')

btnadd.onclick = ()=>{
    if (isNaN(parseInt(number.value))){
        alert("Valor inválido!")
        return;
    }

    if (parseInt(number.value)<0){
        alert('informe apenas valores positivos')
        return;
    }

    let numdigitados = parseInt(inputNumdig.value) + 1
    let soma = parseInt(sum.value) + parseInt(number.value)
    let media = soma/numdigitados

    inputNumdig.value = numdigitados
    inputMedia.value = media
    sum.value = soma
    number.value = null
    number.focus();
}

btnClear.onclick = ()=>{
    sum.value = 0
    inputMedia.value = 0
    inputNumdig.value = 0
}