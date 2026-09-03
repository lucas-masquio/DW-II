import styled from 'styled-components';

const Botao = styled.button`
  background-color: purple;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkviolet;
  }
`;

function MeuBotao() {
  return <Botao>Enviar</Botao>;
}

export default MeuBotao;
