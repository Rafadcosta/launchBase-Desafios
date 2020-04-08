// Construção e impressão de objetos

// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:

// Rua: Rua Guilherme Gembala
// Número: 260
// Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo.

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260,
    }
};

console.log(`A empresa ${empresa.nome}, fica na ${empresa.endereco.rua}, n° ${empresa.endereco.numero}.`);
console.log(`A cor base do design deles é ${empresa.cor}, e o foco da empresa é ${empresa.foco}`);