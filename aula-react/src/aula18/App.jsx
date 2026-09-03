import Frase from './Frase';
import MeuBotao from './MeuBotao';
import Cabecalho from './Cabecalho';
import FormularioValidacao from './Formulario'
import MiniFormulario from './Desafio'

function App() {
  return (
    <div>
      <h1>Atividade 1: Exemplo com CSS Module</h1>
      <Frase />

      <hr />
      <h1>Atividade 2: Meu Botão</h1>
      <MeuBotao />

      <hr />
      <h1>Atividade 3: Cabeçalho Tailwind</h1>
      <Cabecalho />

      <hr />
      <h1>Atividade 4: Formulario de Validação</h1>
      <FormularioValidacao />

      <hr />
      <h1>Atividade 5: Desafio Final</h1>
      <MiniFormulario />
    </div>
  );
}

export default App;