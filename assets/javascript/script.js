
  const pokemonLista = document.querySelector("[data-pokemon]");
  const pokemonNome = document.querySelector("[data-pokemon-name]");
  const cercaPokemon = document.querySelector("[data-cerca-pokemon]");
  const pokedexBox = document.querySelector("[data-pokedex]");
  const spriteContainer = document.querySelector("[data-pokemon-sprite]");
  let options = [];


  function nomeInesistente(name){
    let pokeName = document.createElement("h2");
    pokeName.innerHTML="Il nome inserito non appartiene a nessun pokemon";
    pokedexBox.insertBefore(pokeName, pokedexBox.firstChild);
  }

function cleanInput(){
  pokemonNome.value=""
}
  function cleanDiv(){
    const pokeSprite = spriteContainer.querySelector("img");
    const pokeName = pokedexBox.querySelector("h2");
    if(pokeSprite){
      spriteContainer.removeChild(pokeSprite);
    }
    if (pokeName){
      pokedexBox.removeChild(pokeName);
    }
  }

  function insertName(name){
    let pokeName = document.createElement("h2");
    pokeName.innerHTML=name;
    pokedexBox.insertBefore(pokeName, pokedexBox.firstChild);
  }

  function insertType(data){
console.log(data.types[0].type.name)
  }

  function inertWeakness(){

  }

  function insertSprite (data){
    let pokeSprite = document.createElement("img");
    pokeSprite.src = data.sprites.front_default;
    spriteContainer.appendChild(pokeSprite); // Aggiungi l'opzione alla lista
  }
  






  fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.results[2].name)
    console.log(data.results.length)
    let count = 0
    for(let i=0; i<data.results.length; i++ ){
      let pokeapi = document.createElement("option");
      pokeapi.value = data.results[count].name;
      pokemonLista.appendChild(pokeapi); // Aggiungi l'opzione alla lista*/
      options.push(data.results[count].name)
      count++
    }
  })
  .catch(errore => {
    console.log(errore);
  });

cercaPokemon.addEventListener("click",()=>{
  console.log(pokemonNome.value)
  const inputVAl = pokemonNome.value.toLowerCase()
  if(options.includes(inputVAl)){
    let inputNamePokemon = pokemonNome.value
    cleanInput()
    cleanDiv()
    insertName(inputNamePokemon)
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputVAl}`, {
    method: "GET"
  }).then(response=>{
    return response.json()
  }).then(data=>{
    console.log(data.sprites.front_default)
    insertType(data)
    insertSprite(data)
  })
  } else{
    cleanDiv()
    nomeInesistente()
  }
})



