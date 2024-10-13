let BASE_URL = 'https://swapi.dev/api/people/?page=1'

window.onload = ()=>{
    fetchData(BASE_URL)
} 

async function fetchData(URL){
    const btnPrev = document.getElementsByClassName('prev')
    const btnNext = document.getElementsByClassName('next')
    const divContentPersons = document.getElementById('content')
    divContentPersons.innerHTML = ''
    fetch(URL).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        for (let btnN of btnNext){
            btnN.disabled = data.next == null ? true : false
        }

        for (let btnP of btnPrev){
            btnP.disabled = data.previous == null ? true : false
        }
        
        data.results.map((personagem)=>{
            let divPerson = document.createElement('div')
            divPerson.classList.add('person')

            let divName = document.createElement('div')
            let nameH2 = document.createElement('h2')
            nameH2.innerHTML = personagem.name
            divName.append(nameH2)
            
            let divDadosPersonGeral = document.createElement('div')
            divDadosPersonGeral.classList.add('content-data')

            let divDataPerson = document.createElement('data-person')
            let infoH3 = document.createElement('h3')
            infoH3.innerHTML = 'Informações'

            let pAniversario = document.createElement('p')
            pAniversario.innerHTML = `Aniversário: ${personagem.birth_year}`

            let pGenero = document.createElement('p')
            pGenero.innerHTML = `Gênero: ${personagem.gender}`

            let pAltura = document.createElement('p')
            pAltura.innerHTML = `Altura: ${personagem.height}`

            let pCorCabelos = document.createElement('p')
            pCorCabelos.innerHTML = `Cor do Cabelo: ${personagem.hair_color            }`

            let pCorOlhos = document.createElement('p')
            pCorOlhos.innerHTML = `Cor dos olhos: ${personagem.eye_color}`

            divDataPerson.append(infoH3)
            divDataPerson.append(pAniversario)
            divDataPerson.append(pGenero)
            divDataPerson.append(pAltura)
            divDataPerson.append(pCorCabelos)
            divDataPerson.append(pCorOlhos)
            divDadosPersonGeral.append(divDataPerson)
            
            let divDataPlanet = document.createElement('div')
            divDataPlanet.classList.add('data-planet')

            let planetaH3 = document.createElement('h3')
            planetaH3.innerHTML = 'Planeta origem'
            
            divDataPlanet.append(planetaH3)
            fetch(personagem.homeworld).then((responsePlanet)=>{
                return responsePlanet.json()
            }).then((dataPlanet)=>{
                console.log(dataPlanet);
                let pPlanetName = document.createElement('p')
                pPlanetName.innerHTML = `Nome: ${dataPlanet.name}`

                let pPlanetDiametro = document.createElement('p')
                pPlanetDiametro.innerHTML = `Diâmetro: ${dataPlanet.diameter}`
                
                let pPlanetPopulacao = document.createElement('p')
                pPlanetPopulacao.innerHTML = `População: ${dataPlanet.population}`

                let pPlanetPerOrbital = document.createElement('p')
                pPlanetPerOrbital.innerHTML = `Período orbital: ${dataPlanet.orbital_period}`

                let pPlanetPerRot = document.createElement('p')
                pPlanetPerRot.innerHTML = `Período rotacional: ${dataPlanet.rotation_period}`

                let pPlanetGravidade = document.createElement('p')
                pPlanetGravidade.innerHTML = `Gravidade: ${dataPlanet.gravity}`

                let pPlanetClima = document.createElement('p')
                pPlanetClima.innerHTML = `Clima: ${dataPlanet.climate}`

                divDataPlanet.append(pPlanetName)
                divDataPlanet.append(pPlanetDiametro)
                divDataPlanet.append(pPlanetPopulacao)
                divDataPlanet.append(pPlanetPerOrbital)
                divDataPlanet.append(pPlanetPerRot)
                divDataPlanet.append(pPlanetGravidade)
                divDataPlanet.append(pPlanetClima)
            })
            
            
            divDadosPersonGeral.append(divDataPlanet)

            divPerson.append(divName)
            divPerson.append(divDadosPersonGeral)
            divContentPersons.append(divPerson)
        })
        
        for (let btnN of btnNext){
            btnN.onclick = ()=>{
                fetchData(data.next)
            }
        }
        

        for (let btnP of btnPrev){
            btnP.onclick = ()=>{
                fetchData(data.previous)
            }
        }
    })
}