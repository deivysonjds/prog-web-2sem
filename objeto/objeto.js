const btnEnviar = document.getElementById('env')
const inpuMat = document.getElementById('mat')
const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputCpf = document.getElementById('cpf')
const preObj = document.getElementById('obj-prt')

let pessoa = {}

btnEnviar.onclick = ()=>{
    if (!inputCpf.value || !inpuMat.value || !inputNome.value || !inputIdade.value){
        alert('Preencha todos os dados')
        return;
    }

    pessoa.idade = inputIdade.value
    pessoa.nome = inputNome.value
    pessoa.cpf = inputCpf.value
    pessoa.matricula = inpuMat.value
    
    let textObj = JSON.stringify(pessoa)
    preObj.innerHTML = textObj
}