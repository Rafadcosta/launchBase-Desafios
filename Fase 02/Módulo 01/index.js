// 


const turmaA = [
    {
        nome: 'Rafa',
        nota: 9.8
    },
    {
        nome: 'Gabi',
        nota: 10
    },
    {
        nome: 'Rê',
        nota: 2
    },
    {
        nome: 'Lulu',
        nota: 8
    }
];

const turmaB = [
    {
        nome: 'João',
        nota: 7
    },
    {
        nome: 'José',
        nota: 8
    },
    {
        nome: 'Juca',
        nota: 5
    },
    {
        nome: 'AlunoRandom',
        nota: 10
    }
];

function calculaMedia(alunos){
    let soma=0;
    for (let i=0; i<alunos.length; i++){
        soma = soma + alunos[i].nota;
    }

    const media = soma / alunos.length;

    return media;
}

const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);


function enviaMensagem(media, turma){        
    if (media > 5){
        console.log(`A média da ${turma} foi de ${media}, parabéns!`);
    }else {
        console.log(`A média da ${turma} foi menor que 5.`);
    }
}

enviaMensagem(media1, 'turma A');
enviaMensagem(media2, 'turma B');



// function calculaMedia(alunos){
//     return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3;
// }

// const media1 = calculaMedia(turmaA);
// const media2 = calculaMedia(turmaB);


// function enviaMensagem(media, turma){        
//     if (media > 5){
//         console.log(`A média da ${turma} foi de ${media}, parabéns!`);
//     }else {
//         console.log(`A média da ${turma} foi menor que 5.`);
//     }
// }

// enviaMensagem(media1, 'turma A');
// enviaMensagem(media2, 'turma B');