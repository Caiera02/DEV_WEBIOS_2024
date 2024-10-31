let grupo = [{ username:'Caio', pwd:'Caio2'}]

//  Declaracao Var.
// Teste logico
// incremento 

// for( let contador = 0; contador < 5; contador++)
// {
//     console.log(`valor: ${contador}`);
// } 

let nome='Caio'

for( let i = 0 ; i < grupo.length; i++){
    //console.log(`Olá, ${grupo[i]}`)
    if ( grupo.username == nome){
        console.log(`caiu aqui`);
    }
}