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
    // createDespesa(BASE_URL, {
    //     descricao: "teste de poste 1",
    //     valor: 10
    // })
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
            descricao: inputDesc.value,
            valor: parseFloat(inputVl.value)
        })

        getDespesas(BASE_URL)
        divAdd.classList.remove('addtemp')
        divAdd.innerHTML = '' 
    }

    form.append(labelDescricao)
    form.append(labelValor)
    form.append(btnConfirmar)
    divAdd.append(form)
    divAdd.append(btnConfirmar)
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
   
    } catch (error) {
        alert("Erro ao criar despesa! tente novamente mais tarde")
    }
}

async function deleteDespesa(url, idDespesa) {
    try {
        let response = await fetch(`${url}/${idDespesa}`, {
            method: "DELETE",
            headers: headers
        })
    } catch (error) {
        alert("Erro o deletar despesa! tente novamente.")
    }
}

function listarDespesas(data){
    const divDespesasLista = document.getElementById('despesas-list')
    divDespesasLista.innerHTML = ''
    data.map((despesa)=>{
        let divDespesa = document.createElement('div')
        divDespesa.classList.add('despesa')

        let divDesc = document.createElement('div')
        let pDesc = document.createElement('p')
        pDesc.textContent = despesa.descricao
        divDesc.append(pDesc)

        let divVlr = document.createElement('div')
        let pVlr = document.createElement('p')
        pVlr.textContent = `${parseFloat(despesa.valor)}`
        divVlr.append(pVlr)

        let divEdit = document.createElement('div')
        let buttonEdit = document.createElement('button')
        let imgEdit = document.createElement('img')
        imgEdit.src = './img/edit.png'
        imgEdit.classList.add('icon-edit')
        buttonEdit.append(imgEdit)
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
}