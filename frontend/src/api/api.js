import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // Permite enviar cookies junto com as requisições
});

export default api;