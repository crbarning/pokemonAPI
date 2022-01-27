const inputField = document.querySelector("[name=name]");

function renderCards(response) {
  const cardArray = response.results;
  let htmlTemplate = "";
  for (let results of cardArray) {
    htmlTemplate += `
    <div class="card">
    <h4>${results.name}</h4>
    <img src="${results.url.sprites.official - artwork.front_default}" alt="${
      results.name
    }">
    </div>
    `;
  }
  document.querySelector(".js-pokedex").innerHTML = htmlTemplate;
}
function loadData(event) {
  event.preventDefault();
  const searchExpression = inputField.value;
  inputField.value = "";
  let API_URL = `https://pokeapi.co/api/v2/pokemon/`;

  if (searchExpression.length > 0) {
    API_URL += `?name=${searchExpression}`;
  }
  fetch(API_URL)
    .then((data) => data.json())
    .then(renderCards);
}
