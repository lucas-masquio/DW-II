export default function ListaProdutos() {
    const produtos = [
      { id: 1, nome: 'Camisa', preco: 49.99 },
      { id: 2, nome: 'Calça', preco: 89.99 },
      { id: 3, nome: 'Meias', preco: 19.99 },
      { id: 4, nome: 'Camisa Oficial do Corinthians', preco: 389.00 },
      { id: 5, nome: 'Camisa SEM MUNDIAL', preco: 9.99 }
    ];
  
    return (
      <div>
        <h2>Lista de Produtos</h2>
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              {produto.nome} - R${produto.preco.toFixed(2)}
              {produto.preco < 50 && <span> Promoção!</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }  