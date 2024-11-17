function calculateNewSalary() {
    // salário atual
    const salarioAtual = document.getElementById('salario').value;

    // Verifica se o valor é válido
    if (salarioAtual == '') {
        alert("Por favor, insira um valor válido.")
        // document.getElementById('result').innerHTML = "Por favor, insira um valor válido.";
        // return;
    } else {
        // Calcula o aumento de 17% e soma o reajuste anual de R$ 215
        const aumentoSalario = salarioAtual * 1.17;
        const novoSalario = aumentoSalario + 215;

        // Exibe o novo salário formatado
        // document.getElementById('result').innerHTML = `Seu salário era: R$ ${salarioAtual.toFixed(2).replace('.', ',')}`;
        document.getElementById('result2').innerText = `Seu novo salário será: R$ ${novoSalario.toFixed(2).replace('.', ',')}`;


        const exibir = document.getElementById('result2')

        if (exibir.style.display === 'none' || exibir.style.display === '') {
            exibir.style.display = 'block'; // Mostra o resultado
        } else {
            exibir.style.display = 'none'; // Esconde o resultado

        }
    }
}

