const express = require("express");
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Variável com dados produtos
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100},
    { id: 2, nome: 'Produto B', preco: 150},
    { id: 3, nome: 'Produto C', preco: 200},
];


//Variável de times
const times = [
    {id: 1, nome: 'Santos', ano: 1920 },
    {id: 2, nome: 'Mirasol', ano: 1910 },
    {id: 3, nome: 'Bangu', ano: 1904 }
]

// Criar função
//Rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao servidor Node.js");
});

// Rota produtos
app.get('/produtos', (req, res) => {
    res.send(produtos)
});

// Rota home
app.get('/home', (req, res) => {
    //console.log("Olá",__dirname)
    res.sendFile(__dirname + '/public/home.html')
})

//Rotas times
app.get('/times', (req, res) => {
    res.send(times)
})

// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});