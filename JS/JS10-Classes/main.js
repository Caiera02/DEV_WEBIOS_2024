class Carro {
//    Aqui no constructor vai todas as propriedades             
    constructor(nome, cor, ano){
        this.nome= nome;
        this.cor = cor;
        this.ano= ano;

    }  
}

// class Aluno{
//     constructor(nome,ano,altura,isCracha,isCamiseta,cor){
//         this.nome=nome;
//         this.idade=idade;
//         this.altura=altura;
//         this.isCracha=isCracha;   
//         this.isCamiseta=isCamiseta;
//         this.cor=cor;
//     }
// }

// let aluno1 = new Aluno( 'Caio',2003,1.80,true,true,'black')
// let aluno2 = new Aluno( 'Hevelyn',30,1.50,true,true,'papelao-molhado')


console.log('--------------------------------------------------------------------------');

class Aluno{
    constructor(nome,ano,altura,isCracha,isCamiseta,cor){
        this.nome=nome;
        this.ano=ano;
        this.altura=altura;
        this.isCracha=isCracha;   
        this.isCamiseta=isCamiseta;
        this.cor=cor;
    }
    retornaIdade(){
        //Classe no JS Date -- Retorna informacacoes de data de acordo com seu computador ou servidor
        let datacompleta= new Date();
        let pegaAno = datacompleta.getFullYear();
        return pegaAno - this.ano
        
    }
}

let aluno1 = new Aluno( 'Caio',2003,1.80,true,true,'black')


let aluno2 = new Aluno( 'Hevelyn',30,1.50,true,true,'papelao-molhado')

// console.log(`o Primeiro aluno é ${aluno1}`);
// console.log("'--------------------------------'");
// console.log(aluno2);

console.log(`a idade desse ze ruela é ${aluno1.retornaIdade()}`);
console.log(`a idade desse ze ruela é ${aluno2.retornaIdade()}`);