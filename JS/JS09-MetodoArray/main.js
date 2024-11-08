let frutas = ['Uva', 'caju', 'laranja', 'abacaxi', 'melancia', 'maracuja', 'kiwi', 'maça']

//frutas.forEach(Pecorrer)
//               conteudo, indice  
// function Pecorrer(valor,indice){
//     console.log(valor);
//     console.log(indice);
// }

//arrofunction
// frutas.forEach((valor,indice) => {
//     console.log(valor);
//     console.log(indice);
// })

//Array de Bidmencional 
// let infoUser = [['Ana',1346],['Pedro',2335],['Caio', 566]]

// //forEach a função dele é percorrer algo
// infoUser.forEach((valor,indice) =>{ //Ele traz a posição do valor dentro do array
//     if(indice == 1){
//     console.log(valor)
// }
// })


// function Pecorrer(valor) {
//     let a = 'Uva'
//     if (a === valor) {   
//     console.log('achei');

//     }
//      else {
//          console.log('n achei ');
//          //console.log(`não achei a palavra ${a} que você digitou, só tenho ${valor}`)
//      }
// }


// for(i = 0; i <= frutas.length  ; i++){
//     console.log(frutas[i]);
//     console.log(i);
// }


console.log('---------------------------------------------------------------------------')

//Array de marcas de celulares com 6 posições > numeros

//Math.currently / Math.max / Math.min / Math.sqrt
let numeros = [10, 70, 60, 50, 40, 30, 20]

//Math.sqrt traz a raiz quadrada de cada numero do array numero
let numeros2 = numeros.map(Math.sqrt)
console.log(numeros2);
console.log('---------------------------------------------------------------------------')

let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)
console.log('---------------------------------------------------------------------------')

//Criando um novo array onde ira conter apenas os numero maiores ou igual a 16
let filtrando = numeros.filter((valor) => {
    return valor >= 50
})
console.log(filtrando);

console.log('---------------------------------------------------------------------------')

let tarefa= [
    { tarefa:"Dormir",
    isFeita: true },
    
    { tarefa: "limpar",
        isFeita: false
    },
    
    { tarefa:"Torcer",
        isFeita: true 
    }

]

// console.log(tarefa.find((item) =>{
//     return item.isFeita ==true
// }));

let retornaTrue = tarefa.find((item) =>{
    return item.isFeita ==true
})

console.log(retornaTrue)