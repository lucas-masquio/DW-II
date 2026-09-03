import Atividade1 from './Atividade1PropDrilling';
import Atividade2 from './Atividade2UseContext';
import Atividade3 from './Atividade3UseReducer';
import Atividade4 from './Atividade4UseRef';
import Atividade5 from './Atividade5UseMemo';
import Atividade6 from './Atividade6UseCallback';

export default function App() {
  return (
    <div style={{ padding:  14}}>
      <h1>Aula 16 – React Hooks e Compartilhamento de Estado</h1>

      <hr />
      <h2>Atividade 1: Prop Drilling</h2>
      <Atividade1 />

      <hr />
      <h2>Atividade 2: useContext</h2>
      <Atividade2 />

      <hr />
      <h2>Atividade 3: useReducer</h2>
      <Atividade3 />

      <hr />
      <h2>Atividade 4: useRef</h2>
      <Atividade4 />

      <hr />
      <h2>Atividade 5: useMemo</h2>
      <Atividade5 />

      <hr />
      <h2>Atividade 6: useCallback</h2>
      <Atividade6 />
    </div>
  );
}