/*
🧮 Exercício: Verificar se o aluno foi aprovado

Enunciado:
Crie um programa que peça a nota de um aluno (de 0 a 10) e mostre:

"Aprovado" se a nota for maior ou igual a 6

"Repr
*/

let nota = Number(prompt("Digite sua nota"))

if (nota > 6) {
    alert("Você foi aprovado ! ✅")

} else if (nota >= 4 && nota <6) {
    alert("Você foi reprovado ! ❌")
} 
else if ( nota == "") {
    alert("Digite sua nota, por favor !⚠️")

}
 else {
    alert("Você foi reprovado ! ❌")
}