// 1- otimo atendimento
// 2 Bom
// 3 Regular
// 4 Ruim
// 5 pessimo



let valor= 10

switch (valor) {
    case 1:
        console.log(`Você foi avaliado com otimo`);
        break;
    case 2:
        console.log(`Você foi avaliado com bom`);
        break;
    case 3:
        console.log(`Você foi avaliado com regular`);
        break;
    case 4:
        console.log(`Você foi avaliado com ruim`);
        break;
    case 5:
        console.log(`Você foi avaliado com pessimo`);
        break;

    default:
        console.log(`Você não foi avaliado`);
        break;
}