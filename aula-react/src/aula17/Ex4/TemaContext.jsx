import { createContext } from 'react';

const TemaContext = createContext({
  tema: 'claro',
  alternarTema: () => {}
});

export default TemaContext;
