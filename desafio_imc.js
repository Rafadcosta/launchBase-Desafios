// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

// A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

// peso / (altura * altura);
// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

const nome = 'Rafaela';
const peso = 55;
const altura = 1.65;

const imc = peso / (altura*altura);

if(imc >= 30){
    console.log(`${nome}, você está acima do peso`);
} else {
    console.log(`${nome}, você não está acima do peso`);
}