const btnAdd = document.getElementById('btnAdd')

let BASE_URL = 'https://parseapi.back4app.com/classes/Despesas'

const headers = {
    'X-Parse-Application-Id': 'JclFZ17VgZwt30ncXOWu6kY0TXStwje9s9aQzTNq',
    'X-Parse-REST-API-Key': 'vWNh8gCl5zdXsEDrVA8hHGhdTl51Ni3O0AqO8RuL'
}

const headersJson = {
    ...headers,
    'Content-Type': 'application/json'
}

window.onload = ()=>{
    getDespesas(BASE_URL)
}

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
    inputValor.id = 'inpVl'
    inputValor.type = 'number'
    labelValor.append(inputValor)
    
    const labelDescricao = document.createElement('label')
    labelDescricao.textContent = 'Descricao: '
    const inputDescricao = document.createElement('input')
    inputDescricao.id = 'inpDesc'
    inputDescricao.type = 'text'
    labelDescricao.append(inputDescricao)

    const btnConfirmar = document.createElement('button')
    btnConfirmar.type = 'submit'
    btnConfirmar.classList.add('btnConf')
    btnConfirmar.innerHTML = 'Confirmar'
    btnConfirmar.onclick = ()=>{
        const inputDesc = document.getElementById('inpDesc')
        const inputVl = document.getElementById('inpVl')
        
        if(inputDesc.value == '' || inputVl.value == ''){
            alert('Preencha todos os campos!')
            divAdd.classList.remove('addtemp')
            divAdd.innerHTML = '' 
            return;
        }

        createDespesa(BASE_URL, {
            descricao: `${inputDesc.value}`.toString(),
            valor: parseFloat(inputVl.value)
        })

        divAdd.classList.remove('addtemp')
        divAdd.innerHTML = '' 
        getDespesas(BASE_URL)
    }

    const btnCancelar = document.createElement('button')
    btnCancelar.innerHTML = 'Cancelar'
    btnCancelar.onclick = ()=>{
        divAdd.classList.remove('addtemp')
        divAdd.innerHTML = '' 
    }

    form.append(labelDescricao)
    form.append(labelValor)
    divAdd.append(form)
    divAdd.append(btnConfirmar)
    form.append(btnCancelar)
}


async function getDespesas(url) {
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: headers
        })

        if(!response.ok){
            alert('Erro ao acessar dados! atualize a página')
        }
        let data = await response.json()
        listarDespesas(data.results)
    } catch (error) {
        alert('Erro ao acessar dados! atualize a página')
    }
}

async function createDespesa(url, data) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: headersJson,
            body: JSON.stringify(data)
        })
        await response.json()
        
    } catch (error) {
        alert("Erro ao criar despesa! tente novamente mais tarde")
    }
}

async function updateDdespesa(url, data, idDespesa) {
    try {
        let response = await fetch(`${url}/${idDespesa}`, {
            method: 'PUT',
            headers: headersJson,
            body: JSON.stringify(data)
        })
        await response.json()
        
    } catch (error) {
        alert("Erro ao atualizar despesa! tente novamente mais tarde")
    }
}

async function deleteDespesa(url, idDespesa) {
    try {
        let response = await fetch(`${url}/${idDespesa}`, {
            method: "DELETE",
            headers: headers
        })
        await response.json()
         
    } catch (error) {
        alert("Erro o deletar despesa! tente novamente.")
    }
}

function listarDespesas(data){
    const divDespesasLista = document.getElementById('despesas-list')
    divDespesasLista.innerHTML = ''
    let total = document.getElementById('total')
    total.innerHTML = ''
    let soma = 0
    data.map((despesa)=>{
        soma += parseFloat(despesa.valor)
        let divDespesa = document.createElement('div')
        divDespesa.classList.add('despesa')

        let divDesc = document.createElement('div')
        let pDesc = document.createElement('p')
        pDesc.textContent = despesa.descricao
        divDesc.append(pDesc)

        let divVlr = document.createElement('div')
        let pVlr = document.createElement('p')
        pVlr.textContent = `${despesa.valor.toFixed(2).replace('.',',')}`
        divVlr.append(pVlr)

        let divEdit = document.createElement('div')
        let buttonEdit = document.createElement('button')
        let imgEdit = document.createElement('img')
        imgEdit.src = './img/edit.png'
        imgEdit.classList.add('icon-edit')
        buttonEdit.append(imgEdit)
        buttonEdit.onclick = ()=>{
            pDesc.remove()
            let inputNewDesc = document.createElement('input')
            inputNewDesc.type = 'text'

            let buttonAtualizar = document.createElement('button')
            buttonAtualizar.innerHTML = 'Atualizar'

            buttonAtualizar.onclick = ()=>{
                updateDdespesa(BASE_URL, {
                    descricao: inputNewDesc.value
                },despesa.objectId)

                getDespesas(BASE_URL)
            }
            divDesc.append(buttonAtualizar)
            divDesc.append(inputNewDesc)
        }
        divEdit.append(buttonEdit)
        

        let divDelete = document.createElement('div')
        let buttonDelete = document.createElement('button')
        let imgDelete = document.createElement('img')
        imgDelete.src = './img/delete.png'
        imgDelete.classList.add('icon-delete')
        buttonDelete.append(imgDelete)

        buttonDelete.onclick = ()=>{
            let idDespesa = despesa.objectId
            deleteDespesa(BASE_URL, idDespesa)
            getDespesas(BASE_URL)
        }
        divDelete.append(buttonDelete)

        divDespesa.append(divDesc)
        divDespesa.append(divVlr)
        divDespesa.append(divEdit)
        divDespesa.append(divDelete)
        divDespesasLista.append(divDespesa)
    })
    total.innerHTML = `Total: R$ ${soma.toFixed(2).replace('.',',')}`
}

