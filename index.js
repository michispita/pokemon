async function buscarPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    const input = document.getElementById("input").value.toLowerCase;
    const btn = document.getElementById("btn");
    const container = document.getElementsByClassName("container");
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error');
      }
      return response.json();
    })
    .then(data => {
      displayPokemon(data);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
      container.innerHTML = '<p>Ocurrió un error al realizar la búsqueda</p>';
    });

function displayPokemon(pokemon) {
    const container = document.getElementsByClassName("container");
    container.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h5>${pokemon.id}</h5>
    <div class="types">
        <strong>Tipos:</strong>
    </div>
    `;
}
}




/*function encontrarPokemon(resultados) {
        const findItem = resultados.find(item => {
          return input.value.length > 0 && 
          item.id && 
          item.name.toLowerCase().includes(input.toLowerCase());
      });
      return findItem;
    };
    */

