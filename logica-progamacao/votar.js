/*
    Enunciado: 
    Crie um programa que peça a idade de uma pessoa e mostre uma mensagem dizendo se ela pode votar ou ainda não pode votar.
*/

// let idade = 16;
let idade = Number(prompt("Digite sua idade."));

if (idade < 16 ) {
    alert("Infelizmente você não pode votar.")
} else if (idade >= 16 || idade < 18) {
    alert("Voto opcional.")
} else {
    console.log("Voto obrigatório.")
}