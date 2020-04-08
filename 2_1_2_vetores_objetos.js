// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Por exemplo:

// const objeto = {
//   propriedade: [
//     { nome: "C++", especialidade: "Desktop" },
//     { nome: "JavaScript", especialidade: "Web/Mobile" }
//   ]
// };
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const prog = [
    {
        nome: 'Rafaela',
        idade: 20,
        tecnologias: [
            {
                nome: 'Javascript',
                especialidade: 'Web'
            },
            {
                nome: 'HTML',
                especialidade: 'Web'
            }
        ]
    },
    {
        nome: 'João',
        idade: 25,
        tecnologias: [
            {
                nome: 'Node',
                especialidade: 'API'
            },
            {
                nome: 'React',
                especialidade: 'Web front-end'
            },
            {
                nome: 'React Native',
                especialidade: 'Mobile'
            }
        ]
    }
];


console.log(`O superdev ${prog[1].nome} tem ${prog[1].idade} anos e usa a tecnologia ${prog[1].tecnologias[1].nome} com especialidade em ${prog[1].tecnologias[1].especialidade}`);