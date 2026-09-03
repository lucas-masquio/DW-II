import './App.css';
import Avatar from './Avatar.jsx';
import Relogio from './Relogio.jsx';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
        {/*<h2>Olá, mundo!</h2>
        <p>Este é um conteúdo de texto dentro do Card.</p>*/}
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}