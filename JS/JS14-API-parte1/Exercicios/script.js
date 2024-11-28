async function BuscaFipe() {

    let idMarca= document.getElementById('marca').value
    // let url = `https://viacep.com.br/ws/ ${cep1}/json/`
    let url = 'https://parallelum.com.br/fipe/api/v1/motos/marcas/'+ idMarca +'/modelos/9265/anos/2024-1'

    await fetch(url).then((response) => {
        // Transforma JSON em OBJ
        return response.json();

    }).then((response) => {
        document.getElementById('marca').value = response.Marca
        document.getElementById('modelo').value = response.Modelo
      
        document.getElementById('valor').value = response.Valor

        document.getElementById('comb').value = response.Combustivel
        document.getElementById('ano').value = response.AnoModelo

    })
}