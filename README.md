# DW-II

Projeto com frontend em React/Vite e backend em Node.js/Express com autenticação por JWT em cookie HTTP-only.

## Estrutura

- backend/: API em Express
- frontend/: aplicação React
- database/: scripts SQL do banco

## Requisitos

- Node.js 18+
- PostgreSQL
- npm

## Banco de dados

Crie o banco e a tabela conforme o arquivo [database/login_jwt.sql](database/login_jwt.sql):

```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);
```

## Backend

Entre na pasta do backend:

```bash
cd backend
npm install
```

Crie um arquivo `.env` com as variáveis abaixo:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=login_jwt
```

Inicie o servidor:

```bash
node server.js
```

Ou em modo de desenvolvimento:

```bash
npm run dev
```

O backend roda em:

```text
http://localhost:3000
```

### Rotas da API

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/private/protected
```

- `/api/auth/register`: cria um usuário com email e senha
- `/api/auth/login`: valida credenciais e define o token JWT no cookie `jwt`
- `/api/auth/logout`: remove o cookie JWT
- `/api/private/protected`: rota protegida que exige autenticação via cookie

## Frontend

Entre na pasta do frontend:

```bash
cd frontend
npm install
npm run dev
```

O frontend normalmente fica em:

```text
http://localhost:5173
```

## Observações importantes

- O backend está configurado para aceitar requisições do frontend em `http://localhost:5173` via CORS.
- A autenticação usa cookie HTTP-only, então o navegador precisa aceitar cookies do backend.
- A rota protegida exige que o token JWT esteja presente no cookie `jwt`.
- O projeto usa PostgreSQL e não um `db.json` para autenticação.

## Instalação rápida de dependências do backend

```bash
cd backend
npm install express cors dotenv jsonwebtoken bcrypt bcryptjs cookie-parser helmet express-rate-limit pg
npm install --save-dev nodemon
```

## Instalação rápida de dependências do frontend

```bash
cd frontend
npm install react react-dom react-router-dom axios
npm install --save-dev vite @vitejs/plugin-react eslint
```

## Scripts úteis

### Backend

```bash
cd backend
node server.js
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
npm run build
```