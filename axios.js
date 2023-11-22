const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Função para fazer a requisição à API da Pokédex usando Axios
function obterDadosDaAPI() {
  // Usa o Axios para fazer a requisição
  axios
    .get(apiUrl)
    .then((response) => {
      // A resposta do Axios é acessada em response.data
      console.log("Dados da API:", response.data);
      // Chama a função para exibir os dados na página
      exibirDadosNaPagina(response.data.results);
    })
    .catch((erro) => console.error("Erro na requisição:", erro));
}

// Função para exibir os dados na página
function exibirDadosNaPagina(pokemons) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = `Nome: ${pokemon.name}`;
    outputElement.appendChild(novoParagrafo);
  });
}

// Chama a função para obter dados ao carregar a página
window.onload = obterDadosDaAPI;
