import express from  "express";
const app = express();

export default app;

// Indicar para express ler o body com jason
app.use(express.json());

const cadastros = [
    {
    id: 1,
    nome: "Fernanda Silva",
    telefone: "11987654321",
    cpf: "123.456.789-00",
    email: "fernanda@gmail.com",
    idade: 28,
    endereco: "Rua das Flores, 123"
    },
    {
    id: 2,
    nome: "Caio Oliveira",
    telefone: "11922223333",
    cpf: "987.654.321-11",
    email: "caio@gmail.com",
    idade: 32,
    endereco: "Avenida Brasil, 450"
    },
    {
    id: 3,
    nome: "Pedro Almeida",
    telefone: "21999998888",
    cpf: "321.654.987-55",
    email: "pedro@hotmail.com",
    idade: 45,
    endereco: "Rua Central, 999"
    }
];

// FUNÇÕES AUXILIARES
function buscarCadastrosPorId(id) {
    return cadastros.filter((cadastro) => cadastro.id == id)
}

// Deletar
function buscarIdCadastros(id) {
    return cadastros.findIndex((cadastros) => cadastros.id == id)
}

// ROTAS
app.get("/", (req, res) => {
    res.send("Olá Node js")
});

// Buscar nomes
app.get("/ListaCadastros", (req, res) => {
    res.send(cadastros)
});

// Buscar cadastros por id
app.get ("/ListaCadastros/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarCadastrosPorId(index))
});

// Criar cadastros
app.post ("/ListaCadastros", (req, res) => {
    cadastros.push(req.body);
    res.status(201).send("Nomes cadastrados com sucesso !✅");
});

// Excluir cadastro
app.delete("/ListaCadastros/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdCadastros(id);

    // Se não encontrar, retorna erro
    if (index === -1) {
        return res.status(404).send(`Nenhum cadastro com id ${id} encontrado ⚠️`)
    }

    cadastros.splice(index, 1);
    res.send(`Cadastro com id ${req.params.id} excluído com sucesso !✅`)
});

// Alterar cadastro
app.put("/ListaCadastros/:id", (req, res) => {
    let index = buscarIdCadastros(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;

    res.json(cadastros);

})