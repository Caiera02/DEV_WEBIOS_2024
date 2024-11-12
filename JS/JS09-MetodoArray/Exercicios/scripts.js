//Exercício 1
// Crie um Array unidimensional com 8 posições contendo os seguintes valores 17, 43, 8, 4, 97, 56, 29, 95 em cada posição irá conter um valor do tipo number.
// utilizando o método forEach crie uma função que receba cada valor do array e verifique se o número é par ou ímpar e exiba o resultado no console.log

// let number = [17, 43, 8, 4, 97, 56, 29, 95]

// number.forEach(Percorrer)

// function Percorrer(valor){
//     if( valor % 2 == 1){
//         console.log( `${valor} é um numero impar`);
//     }
//     else if (valor % 2 == 0){
//         console.log( `${valor} é um numero par`);

//     }
// }
console.log("-------------------------------------------------------------");

let number1 = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61, 59]

let filtrando = number1.filter((valor) => {
    if( valor >= 20 && valor <=50){
        return valor
    }
    
})
console.log(filtrando);