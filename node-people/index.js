const express = require("express");
const app = express();
const PORT = 3000; //executar na porta 3000

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];



// Criando funções auxiliares
// Retornar o objeto por Id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id )
}

// Pegar a posição ou index do Array por id
function buscarIdNomes(id) {
    // findIndex - JavaScript
    return nomes.findIndex((nome) => nome.id == id);

}


// Rota principal
app.get("/", (req, res) => {
    res.send("Você está na Rota Principal !")
});


//Rota teste
app.get("/teste", (req, res) => {
    res.send("API nodePepole está funcionando!");
});


// Buscando nomes (ListaNomes)
app.get("/listaNomes", (req, res) => {
    res.send(nomes)
});


// Buscando por ID
app.get("/ListaNomes/:id", (req, res) => {
   let index = req.params.id;
   
   res.json(buscarNomePorId(index))
});


// Criando Rota excluir
app.delete("/ListaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id); 
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso !`)
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

