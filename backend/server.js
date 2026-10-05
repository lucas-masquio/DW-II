require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./src/api");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Muitas requisições vindas deste IP, por favor tente novamente após 15 minutos",
});

let produtos = [
    { id: 1, nome: "Teclado", preco: 120 },
    { id: 2, nome: "Mouse", preco: 80 },
];

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(limiter);

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

app.use("/api", apiRoutes);

app.get("/api/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/api/produtos/:id", (req, res) => {
    const produto = produtos.find((item) => item.id === Number(req.params.id));
    produto
        ? res.json(produto)
        : res.status(404).send("Produto não encontrado");
});

app.post("/api/produtos", (req, res) => {
    const novoProduto = { id: produtos.length + 1, ...req.body };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});