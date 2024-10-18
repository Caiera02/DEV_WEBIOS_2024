// let cupons = 'DESC10' //10%

// let menor = cupons.toLowerCase()
// console.log(menor);

// let maior = cupons.toUpperCase()
// console.log(maior);

// let IMC = 19.937889474
// console.log( IMC.toFixed(3))

//---------------------------------------------------------
let nome = prompt("Digite seu nome: ")

let idade = Number(prompt(" Qual é a sua idade ? "))

let local = prompt(" Qual é o seu bairro ?")

let maior= nome.toUpperCase()
prompt(`${maior}`)

let num1 = parseInt(prompt("Digite um numero: ")) 
let num2 = parseInt(prompt("Digite o segundo numero: "))
let res = alert(num1 + num2)
alert(`Vacilão esse é o seu resultado ${res}`)

//substring

let navegador = ('Brave')
let a = navegador.substring(2)
let b = navegador.substring(1,3)

// charArt

// pega cada caracter


// ----------------------------------
let frase = 'Na moral mano'
console.log(frase)

let novaF = frase.split("")
console.log(novaF);