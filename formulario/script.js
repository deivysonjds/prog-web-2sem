
function gravar(){
    let nome = document.getElementById('nome').value
    let endereco = document.getElementById('endereco').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value

    if (!nome || !endereco || !email || !telefone){
        alert('Preencha todos os campos')
        return;
    }
    localStorage.setItem('nome', nome)
    localStorage.setItem('endereco', endereco)
    localStorage.setItem('email', email)
    localStorage.setItem('telefone', telefone)

    alert('Dados gravados com sucesso!')
}

function exibir(){
    let nome = localStorage.getItem('nome')
    let endereco = localStorage.getItem('endereco')
    let email = localStorage.getItem('email')
    let telefone = localStorage.getItem('telefone')

    if (nome && endereco && email && telefone){
        document.getElementById('dados-nome').querySelector('p').textContent = nome
        document.getElementById('dados-endereco').querySelector('p').textContent = endereco
        document.getElementById('dados-email').querySelector('p').textContent = email
        document.getElementById('dados-telefone').querySelector('p').textContent = telefone
    } else {
        document.getElementById('dados-exibidos').innerHTML = "<p>Não há dados</p>"
    }
}

function enviar() {
    let nome = localStorage.getItem('nome')
    let endereco = localStorage.getItem('endereco')
    let email = localStorage.getItem('email')
    let telefone = localStorage.getItem('telefone')

    let data = `nome: ${nome}\nEndereço: ${endereco}\nEmail: ${email}\nTelefone: ${telefone}`
    let url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(data)}`
    window.open(url, "_blank")
}