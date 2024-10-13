const btnAdd = document.getElementById('btnAdd')

btnAdd.onclick = ()=>{
    
    let addTempPresence = document.getElementsByClassName('addtemp')
    
    if (addTempPresence.length > 0){
        return;
    }
    
    const divAdd = document.getElementById('divAdd')
    divAdd.classList.add('addtemp')

    const form = document.createElement('form')

    const labelValor = document.createElement('label')
    labelValor.textContent = 'Valor: '
    const inputValor = document.createElement('input')
    inputValor.type = 'number'
    labelValor.append(inputValor)
    
    const labelDescricao = document.createElement('label')
    labelDescricao.textContent = 'Descricao: '
    const inputDescricao = document.createElement('input')
    inputDescricao.type = 'text'
    labelDescricao.append(inputDescricao)

    const btnConfirmar = document.createElement('button')
    btnConfirmar.type = 'submit'
    btnConfirmar.classList.add('btnConf')
    btnConfirmar.innerHTML = 'Confirmar'
    btnConfirmar.onclick = ()=>{
        divAdd.classList.remove('addtemp')
        divAdd.innerHTML = '' 
    }

    form.append(labelDescricao)
    form.append(labelValor)
    form.append(btnConfirmar)
    divAdd.append(form)
    divAdd.append(btnConfirmar)
}