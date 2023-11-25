const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

function obterDadosDaAPI() {
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Dados da API:", response.data);
      // Limita a exibição para os primeiros 10 pokémons
      const pokemonsLimitados = response.data.results.slice(0, 10);
      exibirDadosNaPagina(pokemonsLimitados);
    })
    .catch((erro) => console.error("Erro na requisição:", erro));
}

function obterDetalhesDoPokemon(url) {
  return axios.get(url);
}

function exibirDadosNaPagina(pokemons) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  // Itera sobre os pokémons limitados
  pokemons.forEach((pokemon) => {
    // Para cada Pokémon, faz uma segunda requisição para obter detalhes
    obterDetalhesDoPokemon(pokemon.url)
      .then((response) => {
        const novoDiv = document.createElement("div");
        novoDiv.classList.add("pokemon-card");

        const nomeParagrafo = document.createElement("p");
        nomeParagrafo.textContent = `${response.data.name}`;

        const imagem = document.createElement("img");
        imagem.src = response.data.sprites.front_default;
        imagem.alt = response.data.name;

        novoDiv.appendChild(nomeParagrafo);
        novoDiv.appendChild(imagem);

        outputElement.appendChild(novoDiv);
      })
      .catch((erro) =>
        console.error("Erro na requisição de detalhes do Pokémon:", erro)
      );
  });
}

window.onload = obterDadosDaAPI;
