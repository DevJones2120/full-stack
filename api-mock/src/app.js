import express from  "express";
import conexao from "../infra/conexão.js"

const app = express();

// Indicar para express ler o body com jason
// app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Node js")
});

export default app;