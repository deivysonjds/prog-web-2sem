const btnadd = document.getElementById('add')
const sum = document.getElementById('sum')
const number = document.getElementById('number')

btnadd.onclick =()=>{
    if (isNaN(parseInt(number.value))){
        alert("Valor inválido!")
        return;
    }

    if (parseInt(number.value)<0){
        alert('informe apenas valores positivos')
        return;
    }
    soma = parseInt(sum.value) + parseInt(number.value)

    sum.value = soma
    number.value = null
    number.focus();
}