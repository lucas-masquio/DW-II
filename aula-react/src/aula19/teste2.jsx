// Dentro de um componente React, por exemplo, em um arquivo CardProduto.jsx
function CardProduto() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <div className="md:flex">
        <div className="md:shrink-0">
          {/*
            Atenção ao "src":
            Ele começa com uma barra inclinada (/) porque a imagem está na raiz do seu servidor de desenvolvimento,
            dentro da pasta 'images' que está na pasta 'public'.
          */}
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg.webp" // <--- Altere esta linha!
            alt="Copa do Mundo - Brasil"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Novo Produto Incrível
          </div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Smartphone XYZ - Lançamento!
          </a>
          <p className="mt-2 text-gray-500">
            Descubra a tecnologia de ponta com nosso novo Smartphone XYZ, câmera avançada e bateria de longa duração.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;