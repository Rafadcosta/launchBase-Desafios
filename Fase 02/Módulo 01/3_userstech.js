// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [
    {
        nome: 'Rafa',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Alãn',
        tecnologias: ['Java', 'API']
    },
    {
        nome: 'Maiguel',
        tecnologias: ['PHP', 'Laravel']
    }
];

for (let usuario of usuarios) {
    // console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

function veSeUserUsaCSS(usuario){
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia == 'CSS'){
            return true;
        }
    }

    return false;
}

for (let i=0;i<usuarios.length;i++){
    const usersCSS = veSeUserUsaCSS(usuarios[i]);

    if (usersCSS == true){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    } else {
        console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`);
    }
}



// primeiro teste para solução do caso
// for (let i=0 ; i<usuarios.length;i++){

//     console.log(`${usuarios[i].nome} trabalha com `);
//     for (let j=0; j< usuarios[i].tecnologias.length; j++){
        
//         console.log(`${usuarios[i].tecnologias[j]}`);
//     }

// }