import { getImageUrl } from './utils.jsx';

function AvatarCard({ person, size, isSepia, thickBorder, label }) {
  // Estilos de container para permitir o posicionamento absoluto dentro dele
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    width: size,
    height: size,
    margin: '20px7q['
  };

  // Estilo do "Card/Label" sobreposto
  const cardOverlayStyle = {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    filter: isSepia ? 'sepia(100%)' : 'none',
    border: thickBorder ? '4px solid gold' : 'none'
  };

  return (
    <div style={containerStyle}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={imageStyle}
      />
      {/* Este é o "card" ou etiqueta dentro da área da imagem */}
      {label && <div style={cardOverlayStyle}>{label}</div>}
    </div>
  );
}

export default function Profile() {
  return (
    <div style={{ display: 'flex' }}>
      <AvatarCard
        size={150}
        isSepia={true}
        label="Cientista"
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
      />
      <AvatarCard
        size={150}
        thickBorder={true}
        label="Nobel"
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
      />
      <AvatarCard
        size={200}
        thickBorder={true}
        isSepia={true}
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      />
    </div>
  );
}