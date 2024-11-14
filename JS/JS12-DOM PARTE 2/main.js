// Tabuada

//Usando só js

// // let n1 = prompt("Digite a tabuada que deseja: ") 
// let n1 = 2
// let i = 0

// while (i <= 10) {
//     console.log(`${n1} x ${i} = ${i}`)
//     //prompt(`${n1} x ${n} = ${n}`)
//     i += 1
// }
//--------------------------------------------------------------------
//Pega o valor pelo id
let recebe =document.getElementById('numero1')

//Mostra resultado
let result = document.getElementsByName('resultado')

let i = 0

const Tabuada = () =>{
    let guardaValor = recebe.value
    
    if(guardaValor == ''){
        resultado.innerHTML=' Insira um valor valido'
        resultado.style.backgrouncolor = "red"
        //alert('Zé ruela precisa digitar algo, raparigo')
    }else{
        for(i = 0; i <=10; i++){
            let resultadoTabuadda = guardaValor * i
            console.log(guardaValor,'x' , i, '=', resultadoTabuadda)
    
            resultado.innerHTML += `${guardaValor} X ${i} = ${guardaValor *i} <br/>`
        }

    }
    //innerHTML
   // con
}

const Limpar =() =>{
    resultado.innerHTML=''
    valor.value =''
}
