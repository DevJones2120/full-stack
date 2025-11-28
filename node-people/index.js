const express = require("express");
const app = express();
const PORT = 3000; //executar na porta 3000

// Indicar para express ler o body com jason
app.use(express.json());

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];


const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];


// FUNÇÕES AUXILIARES
// Buscar times por id
function buscarTimesPorId(id) {
    return times.filter((timesFutebol) => timesFutebol.id == id)
}

// Pegar a posição ou index do Array por id do times
function buscarIdTimes(id) {
// findIndex - JavaScript
    return times.findIndex((timesFutebol) => timesFutebol.id == id);
}

// Buscar nomes por id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id )
}

// Pegar a posição ou index do Array por id de nomes
function buscarIdNomes(id) {
    // findIndex - JavaScript
    return nomes.findIndex((nome) => nome.id == id);
}


// ROTAS TIMES

// Rota para buscar times
app.get("/times", (req, res) => {
    res.send(times)
})

// Rota para buscar por id
app.get("/times/:id", (req,res) => {

    let index = req.params.id;
    res.json(buscarTimesPorId(index))
})

// Rota para excluir 
app.delete("/times/:id", (req, res) => {
    let index = buscarIdTimes(req.params.id)
    times.splice(index, 1)
    res.send(`Time com o id ${req.params.id} excluido com sucesso !`)
});

// Rota para cadastrar
app.post("/times", (req, res) => {
    times.push(req.body)
    res.status(201).send("Time cadastrado com sucesso !")
});


// ROTAS NOMES

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


// Criando Post para cadastrar
app.post("/ListaNomes", (req,res) => {
    nomes.push(req.body);
    res.status(201).send("Nomes cadastrados com sucesso !")
});

// Criando Rota excluir
app.delete("/ListaNomes/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdNomes(id); 
    
// Se não encontrar, retorna erro
    if (index === -1) {
        return res.status(404).send(`Nenhum nome com id${id} foi encontrado`);
    }
    
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso !`)

});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});