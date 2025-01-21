
  const pokemonLista = document.querySelector("[data-pokemon]");
  const pokemonNome = document.querySelector("[data-pokemon-name]");
  const cercaPokemon = document.querySelector("[data-cerca-pokemon]")
  const spriteContainer = document.querySelector("[data-pokemon-sprite]");
  let options = [];
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputVAl}`, {
    method: "GET"
  }).then(response=>{
    return response.json()
  }).then(data=>{
    console.log(data.sprites.front_default)
    let pokesprite = document.createElement("img");
      pokesprite.src = data.sprites.front_default;
      spriteContainer.appendChild(pokesprite); // Aggiungi l'opzione alla lista
  })
  } else{
    console.log("inserisci un nome esistente")
  }
})

