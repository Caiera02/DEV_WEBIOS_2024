document.body.style.backgroundColor="black"

document.title = "Socorro Dom"
// podemos usar o debugger para debugar 


document.createElement('button').innerHTML= "Texto"
document.createElement('button').innerHTML= "Texto"


let campoNovo=document.createElement('button')

//inserir estilo dentro do HTML
campoNovo.style.background = 'red'
campoNovo.style.borderRadius = '5px'

//informar em qual elemento queremos inserir o botão
document.body.appendChild(campoNovo).innerHTML= 'Enviar'

//console.log(document)
