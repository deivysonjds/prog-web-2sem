const btnGerar = document.getElementById('fetchCats')

API_KEY = "live_UUnX6fiC0KoQLuk1s3OvqIwyzUt3jxahTwqYJjd2L2TPMVvlh5hKas32TnXjCFjd"
URL_BASE = "https://api.thecatapi.com/v1/images/search?limit=10"

const header = {
    "x-api-key": API_KEY
}

// const requestOptions = {
//     method: 'GET',
//     headers: header
// }

btnGerar.onclick = ()=>{
    const divContent = document.getElementById('content')
    divContent.innerHTML = ''
    const contentMain = document.getElementById('main-content')
    try{
        let divMore = document.getElementById('div-more')
        divMore.innerHTML = ''
    } catch {

    }

    fetch(URL_BASE, header).then((response)=>{
        return response.json()
    }).then((data)=>{
        let imagesData = data;

        imagesData.map((imageUrl)=>{
            let divImg = document.createElement('div')
            divImg.classList.add('img-content')
            
            let img = document.createElement('img')
            img.src = imageUrl.url

            divImg.append(img)
            divContent.append(divImg)
        })
    })
    
    const divVerMais = document.createElement('div')
    divVerMais.id = 'div-more'
    const btnVerMais = document.createElement('button')
    divVerMais.classList.add('btn-more')
    btnVerMais.innerHTML = 'Ver mais'

    btnVerMais.onclick = ()=>{
        const divContent = document.getElementById('content')
    
        fetch(URL_BASE, header).then((response)=>{
            return response.json()
        }).then((data)=>{
            let imagesData = data;
    
            imagesData.map((imageUrl)=>{
                let divImg = document.createElement('div')
                divImg.classList.add('img-content')
                
                let img = document.createElement('img')
                img.src = imageUrl.url
    
                divImg.append(img)
                divContent.append(divImg)
            })
        })
    }

    divVerMais.append(btnVerMais)
    contentMain.append(divVerMais)
}

