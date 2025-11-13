/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pensando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/
function verificarPontos() {

    let vitoria = Number(prompt("Quantos jogos seu time venceu ?"))
    let empates = Number(prompt("Quantos jogos seu time empatou ?"))
    let pontos = vitoria * 3 + empates

    document.write("Seu time está com ", pontos, " !")

    if (pontos > 10) {
        document.write("<br>", "Seu time está indo bem ! 🎉")
    } else {
        document.write("<br>", "Seu time precisa melhorar❗", "<br>")
    }
}



verificarPontos()
verificarPontos()

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/