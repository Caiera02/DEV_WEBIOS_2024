// Hoje falaremos de API

let url = 'https://dog.ceo/api/breed/pitbull/images/random'

const DogApi = async () => {
    // Faço a consulta na API  e retorno o JSON na variavel resp
    //aqui ele fala para esperar por isso usa o await
    //fetch faz a consulta e validação
    await fetch(url).then((response) =>{
        return response.json();


    }).then((response)=>{
        document.getElementById('mostraJSON').innerText= JSON.stringify(response)
        let img =`
        <img src="${response.message} " alt="">
        `
        document.getElementById('apresentaImg').innerHTML = img
    })





    // Pegar o retorno JSON  e transforma ele em um Objeto

    // Apresenta o link
    // let exemplo = resp.json()
    // console.log(exemplo);
    // https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg

}

DogApi()