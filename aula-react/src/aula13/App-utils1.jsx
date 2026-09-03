import { getImageUrl } from './utils.jsx';

// 1. Corrigido: As props agora refletem no estilo via classes CSS
function Avatar({ person, size, isSepia, thickBorder }) {
  const imageClass = `avatar ${isSepia ? 'sepia' : ''} ${thickBorder ? 'thick-border' : ''}`;

  return (
    <img
      className={imageClass}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        isSepia={true} // Exemplo de uso
        thickBorder={true} // Exemplo de uso
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={180}
        thickBorder={true}
        isSepia={true}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={200}
        thickBorder={true}
        isSepia={false}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}