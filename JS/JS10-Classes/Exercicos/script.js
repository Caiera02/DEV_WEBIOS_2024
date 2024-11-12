class contaBancaria {
    constructor(nome, idade, salário, sexo, agência, conta, numeroConta) {
        this.nome = nome
        this.idade = idade
        this.salário = salário
        this.sexo = sexo
        this.agência = agência
        this.conta = conta
        this.numeroConta = numeroConta

        contaPoupança(){
            // A taxa tem o valor 1,5% encima do salario
            //se o salario for 300
        }
        contaCorrente(){
            // A taxa tem o valor 3,6% encima do salario
        }
        contaEstudante(){
            // A taxa tem o valor 1,6% encima do salario
        }
    }
}

//instanciando objetos

let conta1 = new contaBancaria()
let conta2 = new contaBancaria()
let conta3 = new contaBancaria()

console.log( 1);
console.log( 2);
console.log( 3);
