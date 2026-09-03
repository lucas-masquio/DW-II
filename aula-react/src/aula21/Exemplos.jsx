axios.get('http://localhost:3001/usuarios')
  .then(res => setUsuarios(res.data))
  .catch(err => console.error(err));

axios.post('http://localhost:3001/usuarios', { nome, email })

axios.put(`http://localhost:3001/usuarios/${id}`, { nome, email })

axios.delete(`http://localhost:3001/usuarios/${id}`)

