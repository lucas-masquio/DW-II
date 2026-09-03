import ListaProdutos from './ListaProdutos';
import Usuarios from './Usuarios';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Exemplos de Listas, Condições e useEffect</h1>
      <ListaProdutos />
      <hr />
      <Usuarios />
    </div>
  );
}