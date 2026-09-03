const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// ===============================
// MIDDLEWARES
// ===============================

// Permite que o frontend (localhost:5173) acesse o backend
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Permite receber JSON no body das requisições
app.use(express.json());

// Permite trabalhar com cookies
app.use(cookieParser());


// ===============================
// ROTAS
// ===============================

const apiRoutes = require('./src/api');

app.use('/api', apiRoutes);


// ===============================
// ROTA PRINCIPAL
// ===============================

app.get('/', (req, res) => {
    res.send('API funcionando!');
});


// ===============================
// INICIALIZAÇÃO DO SERVIDOR
// ===============================

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});