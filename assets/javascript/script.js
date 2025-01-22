const pokemonLista = document.querySelector("[data-pokemon]");
const pokemonNome = document.querySelector("[data-pokemon-name]");
const cercaPokemon = document.querySelector("[data-cerca-pokemon]");
const pokedexBox = document.querySelector("[data-pokedex]");
const spriteContainer = document.querySelector("[data-pokemon-sprite]");
let options = [];

// Funzione per mostrare messaggio di nome inesistente
function nomeInesistente() {
  let pokeName = document.createElement("h2");
  pokeName.innerHTML = "Il nome inserito non appartiene a nessun Pokémon";
  pokedexBox.insertBefore(pokeName, pokedexBox.firstChild);
}

// Funzione per aggiungere le opzioni del Pokémon alla lista
function insertOption(data) {
  console.log(data.results[2].name);
  console.log(data.results.length);

  data.results.forEach(pokemon => {
    let pokeapi = document.createElement("option");
    pokeapi.value = pokemon.name;
    pokemonLista.appendChild(pokeapi); // Aggiungi l'opzione alla lista
    options.push(pokemon.name); // Aggiungi il nome alla lista delle opzioni
  });
}

// Funzione per pulire l'input
function cleanInput() {
  pokemonNome.value = "";
}

// Funzione per pulire i dati precedenti dalla pagina
function cleanDiv() {
  const pokeSprite = spriteContainer.querySelector("img");
  const pokeName = pokedexBox.querySelector("h2");
  const pokemonTypeContainer = document.querySelector("#data-type");
  const pokeBstContainer = document.querySelector("#data-bst-container");

  if (pokeSprite) spriteContainer.removeChild(pokeSprite);
  if (pokeName) pokedexBox.removeChild(pokeName);
  if (pokemonTypeContainer) pokedexBox.removeChild(pokemonTypeContainer);
  if (pokeBstContainer) pokedexBox.removeChild(pokeBstContainer);
}

// Funzione per inserire il nome del Pokémon
function insertName(name) {
  let pokeName = document.createElement("h2");
  pokeName.innerHTML = name;
  pokedexBox.insertBefore(pokeName, pokedexBox.firstChild);
}

// Funzione per inserire il tipo del Pokémon
function insertType(data) {
  let pokeName = document.querySelector("h2");
  let pokemontypeContainer = document.createElement("div");
  pokemontypeContainer.id = "data-type";
  pokemontypeContainer.innerHTML = "Type: ";

  data.types.forEach((type, index) => {
    pokemontypeContainer.innerHTML += `<strong>${type.type.name}</strong>`;
    if (index !== data.types.length - 1) pokemontypeContainer.innerHTML += " / ";
  });

  pokeName.insertAdjacentElement("afterend", pokemontypeContainer);
}

// Funzione per inserire lo sprite del Pokémon
function insertSprite(data) {
  let pokeSprite = document.createElement("img");
  pokeSprite.src = data.sprites.front_default;
  pokeSprite.alt = data.name;
  spriteContainer.appendChild(pokeSprite);
}

// Funzione per inserire le statistiche del Pokémon
function insertBst(data) {
  let pokeBstContainer = document.createElement("div");
  pokeBstContainer.id = "data-bst-container";
  pokedexBox.appendChild(pokeBstContainer);

  for (let i = 0; i < data.stats.length; i += 2) {
    let pokeBstLine = document.createElement("div");
    pokeBstLine.id = "data-bst-line";

    let pokemonBst1 = document.createElement("p");
    pokemonBst1.id = "data-bst";
    pokemonBst1.innerHTML = `<strong>${data.stats[i].stat.name}</strong>: ${data.stats[i].base_stat}`;

    let pokemonBst2 = document.createElement("p");
    pokemonBst2.id = "data-bst";
    pokemonBst2.innerHTML = `<strong>${data.stats[i + 1].stat.name}</strong>: ${data.stats[i + 1].base_stat}`;

    pokeBstLine.appendChild(pokemonBst1);
    pokeBstLine.appendChild(pokemonBst2);
    pokeBstContainer.appendChild(pokeBstLine);
  }
}

// Fetch iniziale per ottenere la lista dei Pokémon
async function fetchPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    insertOption(data);
  } catch (error) {
    console.error("Errore durante il recupero dei Pokémon:", error);
  }
}

cercaPokemon.addEventListener("click", async () => {
  const inputVal = pokemonNome.value.toLowerCase();

  if (options.includes(inputVal)) {
    cleanInput();
    cleanDiv();
    insertName(inputVal);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`);
      const data = await response.json();
      insertType(data);
      insertSprite(data);
      insertBst(data);
    } catch (error) {
      console.error("Errore durante il recupero del Pokémon:", error);
    }
  } else {
    cleanDiv();
    nomeInesistente();
  }
});

// Avvia il fetch dei Pokémon iniziali
fetchPokemons();
