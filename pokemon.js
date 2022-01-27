const inputField = document.querySelector("[name=name");

function renderPokemon(response) {
  //console.log(response);
  const results = response.sprites;
  let htmlTemplate = "";
  htmlTemplate += `
  <div class="card">
    <h4>${response.name}</h4>
    <img src="${results.other.dream_world.front_default}"
    alt="${response.name}" />
  </div>
`;

  const pokeContainer = document.querySelector(".pokedex");
  pokeContainer.innerHTML = htmlTemplate;
}

function loadPokemon(event) {
  event.preventDefault();
  const searchExpression = inputField.value;
  inputField.value = "";
  let API_URL = `https://pokeapi.co/api/v2/pokemon`;
  if (searchExpression.length > 0) {
    //console.log(searchExpression);
    API_URL += `/${searchExpression}`;
  }
  //console.log(API_URL);
  fetch(API_URL)
    .then((data) => data.json())
    .then((d) => renderPokemon(d));
}

document.getElementById("js-form").addEventListener("submit", loadPokemon);
