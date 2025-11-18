
const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validação do formulário
    // se o imput for vazio, adicionar mensagem

    if (inputNome.value == "") {
        alert("Insira seus dados por favor.")
        return false;
    }

    if (inputEmail.value == "") {
        alert("Insira seus dados por favor.")
        return false;
    }

    if (inputTel.value == "") {
        alert("Insira seus dados por favor.")
        return false;
    }

    console.log(inputNome.value);
    console.log(inputEmail.value);
    console.log(inputTel.value);
    
})