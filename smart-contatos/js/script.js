
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

    // CRIANDO BOTÃO EXCLUIR    
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.className = "btn-delete";



        function deletar () {
            
        }
    //CRIAR <li>
        const li = document.createElement("li");

    //CRIANDO FUNÇÃO PARA EXCLUIR

    btnExcluir.addEventListener("click", function() {
        alert("teste")
    })

        li.innerHTML = `
            <span class="contato-nome">👤: ${inputNome.value}</span>
            <span class="contato-email">📧: ${inputEmail.value}</span>
            <span class="contato-tel">📞: ${inputTel.value}</span>
        `;
        lista.appendChild(li)
        li.appendChild(btnExcluir)

        //LIMPAR INPUTS
        form.reset();
    
})