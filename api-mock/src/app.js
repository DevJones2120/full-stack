import express from  "express";
import conexao from "../infra/conexão.js"

const app = express();

// Indicar para express ler o body com jason
// app.use(express.json());

app.get("/", (req, res) => {
    res.send("Seja bem vindo á Copa do Mundo !🏆")
});


// Buscar todas as seleções
app.get("/selecoes", (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result)
    })
});

export default app;