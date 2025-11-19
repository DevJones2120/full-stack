
const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");
const listaMsg = document.querySelector(".lista-msg")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // VALIDAÇÃO DO FORMULÁRIO
    // se o imput for vazio, adicionar mensagem
    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Insira seus dados por favor.")
        return false;
    }

    // CONDIÇÃO PARA RETIRAR A li > .lista-msg
    // se essa lista === true
        if (listaMsg) {
            listaMsg.remove();
        }


    // MENSAGENS IRÃO APARECER EM CADA FORMULÁRIO
    // if (inputNome.value == "") {
    //     alert("Insira seu nome por favor.")
    //     return false;
    // }--

    // if (inputEmail.value == "") {
    //     alert("Insira seu email por favor.")
    //     return false;
    // }

    // if (inputTel.value == "") {
    //     alert("Insira seu telefone por favor.")
    //     return false;
    


    //CRIAR <li>
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="contato-nome">👤: ${inputNome.value}</span>
            <span class="contato-email">📧: ${inputEmail.value}</span>
            <span class="contato-tel">📞: ${inputTel.value}</span>
        `;
        lista.appendChild(li)

        //LIMPAR INPUTS
        form.reset();
    
})