let aluno = {
    name: 'Caio',
    idade: '18',
    altura: 1.80,
    isCracha: true,
    isTshirt: false,
    isPaciencia: true,
    isChora: true,
    cor: 'black'
}
// //retornoar o objeto
// console.log(aluno)

// //retorna apenas o que eu quero
// console.log(aluno.idade)

// //
// console.log(aluno.notas[2]);

//---------------------------------------------------------

// let ios = [
//     {
//         name: 'Caio',
//         idade: '18',
//         altura: 1.80,
//         isCracha: true,
//         isTshirt: false,
//         isPaciencia: true,
//         isChora: true,
//         cor: 'black'
//     },
//     {
//         name: 'Nicola',
//         idade: '22',
//         altura: 1.80,
//         isCracha: false,
//         isTshirt: true,
//         isPaciencia: true,
//         isChora: false,
//         cor: 'white',
//         notas: [9, 10, 9, 6.5, 7.5]
//     },
//     {
//         name: 'Maria Eduarda',
//         idade: '15',
//         altura: 1.80,
//         isCracha: true,
//         isTshirt: true,
//         isPaciencia: true,
//         isChora: false,
//         cor: 'rosa',
//         notas: [9, 10, 9, 10, 9.5]
//     }
// ]

//Retornando objeto
// console.log(ios)

//Retornando apenas 1 objeto
// console.log(ios[1]);

// Retornar apenas a variavel isCamisa do objeto 
//console.log(ios[0].isCracha,ios[1].name);

//Trazendo se os alunos tem cracha
//  for( let i = 0 ; i < ios.length; i++){
//     let login = ios[i]
//     if ( login.isCracha == true){
//          console.log(`tem cracha`);
//     }
//     else{
//         console.log(`não tem`);  
//     }
// }
// let a=  console.log(aluno)

let Jsonito = '{ "name": "Caio", "idade": "18", "altura": 1.8, "isCracha": true, "isTshirt": false, "isPaciencia": true, "isChora": true, "cor": "black" }'

// console.log(JSON.stringify(aluno));
console.log(JSON.parse(Jsonito));

