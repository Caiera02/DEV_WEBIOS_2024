class Carro {
//    Aqui no constructor vai todas as propriedades             
    constructor(nome, cor, ano){
        this.nome= nome;
        this.cor = cor;
        this.ano= ano;

    }  
}

class Aluno{
    constructor(nome,ano,altura,isCracha,isCamiseta,cor){
        this.nome=nome;
        this.idade=idade;
        this.altura=altura;
        this.isCracha=isCracha;   
        this.isCamiseta=isCamiseta;
        this.cor=cor;
    }
}

let aluno1 = new Aluno( 'Caio',15,1.80,true,true,'black')
let aluno2 = new Aluno( 'Hevelyn',30,1.50,true,true,'papelao-molhado')


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
        
    }
}





console.log(`o Primeiro aluno é ${aluno1}`);
console.log("'--------------------------------'");
console.log(aluno2);