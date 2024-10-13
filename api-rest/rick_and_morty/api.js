let URL_BASE = 'https://rickandmortyapi.com/api/character/?page=1'

window.onload = ()=>{
    fetchData(URL_BASE)
} 

function fetchData(URL){
    const btnPrev = document.getElementById('prev')
    const btnNext = document.getElementById('next')
    const divContentPersons = document.getElementById('content')
    divContentPersons.innerHTML = ''
    fetch(URL).then((response)=>{
        return response.json()
    }).then((data)=>{        
        btnNext.disabled = data.info.next == null ? true : false
        btnPrev.disabled = data.info.prev == null ? true : false
        
        data.results.map((personagem)=>{
            let divPersonagem = document.createElement('div')
            divPersonagem.classList.add('character')

            let didvImg = document.createElement('div')

            let img = document.createElement('img')
            img.classList.add('img-character')
            img.alt = `${personagem.name}`
            img.src = personagem.image

            let h2Nome = document.createElement('h2')
            h2Nome.classList.add('data-name')
            h2Nome.innerHTML = `Nome: ${personagem.name}`
            
            let pStatus = document.createElement('p')
            pStatus.classList.add('data-p')
            pStatus.innerHTML = `Status: ${personagem.status}`
            
            let pSpecie = document.createElement('p')
            pSpecie.classList.add('data-p')
            pSpecie.innerHTML = `Spécie: ${personagem.species}`
            
            let pOrigem = document.createElement('p')
            pOrigem.classList.add('data-p')
            pOrigem.innerHTML = `Origem: ${personagem.origin.name}`
            
            let pLocalizacao = document.createElement('p')
            pLocalizacao.classList.add('data-p')
            pLocalizacao.innerHTML = `Localização: ${personagem.location.name}`
            
            let divData = document.createElement('div')
            divData.classList.add('colum-data2')

            didvImg.append(img)

            divData.append(h2Nome)
            divData.append(pStatus)
            divData.append(pSpecie)
            divData.append(pOrigem)
            divData.append(pLocalizacao)
            divPersonagem.append(didvImg)
            divPersonagem.append(divData)
            divContentPersons.append(divPersonagem)
        })
        btnNext.onclick = ()=>{
            fetchData(data.info.next)
        }

        btnPrev.onclick = ()=>{
            fetchData(data.info.prev)
        }
    })
}