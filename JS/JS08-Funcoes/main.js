// variaveis
var nome;

//funcoes >>> function NomeAluno(){ }

// function Contador() {
//     //criar uma verificacao de se o numero digitado é par ou impar 
//     let imparPar = 4;
//     let numero = 1

//     // se for impar entao vamos apresentar na tela todos os numero impares de 1 ate 50
//     if (imparPar % 2 == 1) {
//         console.log("Esse numero é impar");
//         //ficou numero 2vezes por não deixa fica sem   
//         for (numero; numero <= 50; numero++) {
//             if (numero % 2 === 1) {
//                 console.log(numero);
//             }
//         }
//         //senão (se for par) vamos apresentar na tela todo os numeros pares de 1 até 50 
//     } else if (imparPar % 2 == 0) {
//         console.log('Esse numper é par');
//         for (numero; numero <= 50; numero++) {
//             if (numero % 2 === 0) {
//                 console.log(numero);
//             }
//         }

//     }

// }

//OBS: funcoes sao sempre chamadas acompanhadas de parenteses 
//console.log(Contador())
//------------------------------------------------------------------------------------------------------------------------

// Arrow function 

let Welcome = () => {
    return 'Olá Arrow function'
}

// Os parenteses servem para trazer valores que estao fora da funçao para dentro dela assim conseguindo trabalhar com varios tipos de valores informados pelo usuario
console.log(Welcome());

//-----------------------------------------------------------------------------------------------

//Definido os valores da variavel / Pra não deixar valo fixo só tirar os valores das variaveis  a e b 
let Soma = (a , b ) => {
    return a + b
}
console.log(Soma(10,11));
//-----------------------------------------------------------------------------------------------

function Clique(){
    let cliques = 0;
    return cliques ++;
    
}

let ChamaPopUp = () => {
    alert(`Parabens vc me chamou, descompensado !`)
}

let PasseMouse = () =>{
    console.log(` O mano passou o mouse por cima de mim `);
    
}

console.log(Clique())



