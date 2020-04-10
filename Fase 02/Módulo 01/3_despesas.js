//soma de receitas e despesas, apontar saldo

const users = [
    {
        nome: 'Rafaela',
        receitas: [375, 170, 1540],
        despesas: [680, 500, 150, 80, 450, 169, 40]
    },
    {
        nome: 'Fulano',
        receitas: [347,98, 1000, 530],
        despesas: [1000, 500, 430.6, 84]
    }
];

function somaNumeros(numeros){
    let soma = 0;

    for(let valor of numeros){
        soma = soma + valor;
    }

    return soma;
}

function calculaSaldo(receitas, despesas){
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);

    return somaReceitas - somaDespesas;
}

for (let pessoa of users){
    const saldo = calculaSaldo(pessoa.receitas, pessoa.despesas);

    if (saldo > 0){
        console.log(`${pessoa.nome} saldo POSITIVO DE ${saldo}`);
    } else {
        console.log(`${pessoa.nome} saldo NEGATIVO DE ${saldo}`);
    }
}