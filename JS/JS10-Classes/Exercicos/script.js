class contaBancaria {
    constructor(nome, idade, salario, sexo, agência, conta, numeroConta) {
        this.nome = nome
        this.idade = idade
        this.salario = salario
        this.sexo = sexo
        this.agência = agência
        this.conta = conta
        this.numeroConta = numeroConta
    }
    contaPoupanca() {
        // A taxa tem o valor 1,5% encima do salario
        let percentual = 0.015
        console.log(`Salário com desconto: R$ ${this.salario - (this.salario * percentual).toFixed(2)}`);
        // console.log(`Conta: ${this.conta}, Salário original: R$ ${this.salario.toFixed(2)}, Salário com desconto: R$ ${this.salario - (this.salario*percentual).toFixed(2)}`);

    }
    contaCorrente() {
        // A taxa tem o valor 3,6% encima do salario
        let percentual1 = 0.036
        console.log(`Salário com desconto: R$ ${this.salario - (this.salario * percentual1).toFixed(2)}`);

    }
    contaEstudante() {
        // A taxa tem o valor 1,2% encima do salario
        let percentual2 = 0.012
        console.log(`Salário com desconto: R$ ${this.salario - (this.salario * percentual2).toFixed(2)}`);

    }
}


//instanciando objetos

let conta1 = new contaBancaria('Caio', 18, 1500, 'M', 100, "Poupança", 123)
let conta2 = new contaBancaria('Caiera', 21, 10000, 'BI', 101, "Corrente", 345)
let conta3 = new contaBancaria('Caioba', 22, 2000, 'F', 102, "Estudante", 678)

console.log('** Conta Poupança **');
console.log(conta1)
console.log(conta1.contaPoupanca());


console.log('== Conta Corrente ==');
console.log(conta2);
console.log(conta2.contaCorrente());

console.log('** Conta Estudante **');
console.log(conta3);
console.log(conta3.contaEstudante());
