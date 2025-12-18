import express from  "express";
import selecoesRoutes from "../routes/selecoes.routes.js"


const app = express();

// Indicar para express ler o body com jason
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Seja bem vindo á Copa do Mundo !🏆")
});

// Usando a rota de selecoes
app.use(selecoesRoutes);

export default app;