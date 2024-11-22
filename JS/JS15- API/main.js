let cep = document.getElementById('cep')

let url = `https://viacep.com.br/ws/${cep.value}/json/`

// async function BuscaCep() {
//     let resp =await fetch(url).then((response) =>{
//         // Transforma JSON em OBJ
//         return response.json();

//     }).then((response) => { 
//         document.getElementById('cep').value = response.cep

//         document.getElementById('lg').value = response.logradouro

//         document.getElementById('comp').value = response.complemento
//         document.getElementById('bairro').value = response.bairro
        
//     })

//     // let exemplo = res.json();
//     // console.log(exemplo)
// }

// BuscaCep();

async function BuscaCep() {
    await fetch(url).then((response) =>{
        // Transforma JSON em OBJ
        return response.json();

    }).then((response) => { 
        document.getElementById('cep').value = response.cep

        document.getElementById('lg').value = response.logradouro

        document.getElementById('comp').value = response.complemento
        document.getElementById('bairro').value = response.bairro
        
    })

}

// BuscaCep();

