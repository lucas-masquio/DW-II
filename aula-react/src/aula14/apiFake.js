export function enviarDados(dados) {
    console.log("API Fake - dados recebidos:", dados);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          sucesso: true,
          mensagem: `Dados de ${dados.nome} recebidos com sucesso!`,
        });
      }, 1500);
    });
  }