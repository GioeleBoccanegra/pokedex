
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

  function insertOption(data){
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
}

function cleanInput(){
  pokemonNome.value=""
}
  function cleanDiv(){
    const pokeSprite = spriteContainer.querySelector("img");
    const pokeName = pokedexBox.querySelector("h2");
    const pokemonTypeContainer = document.querySelector("#data-type")
    const pokeBstContainer= document.querySelector("#data-bst-container")
    const pokeBstLine = document.querySelectorAll("#data-bst-line")
    const pokemonBst = document.querySelectorAll("#data-bst")


    if(pokeSprite){
      spriteContainer.removeChild(pokeSprite);
    }


    if (pokeName){
      pokedexBox.removeChild(pokeName);
    }


    if(pokemonTypeContainer){
      pokedexBox.removeChild(pokemonTypeContainer)
    }

    if(pokeBstContainer){
      pokedexBox.removeChild(pokeBstContainer)
      if(pokeBstLine){
        pokeBstLine.forEach(line => {
          // Rimuove ogni #data-bst-line
          line.remove();
        })
        }
        
      
    }

  }

  function insertName(name){
    let pokeName = document.createElement("h2");
    pokeName.innerHTML=name;
    pokedexBox.insertBefore(pokeName, pokedexBox.firstChild);
  }

  function insertType(data){
    let pokeName = document.querySelector("h2");
    let pokemontypeContainer = document.createElement("div")
    pokemontypeContainer.id= "data-type"
    pokemontypeContainer.innerHTML = "type: "
    for(let i = 0; i<data.types.length; i++){
    pokemontypeContainer.innerHTML += "<strong>" + data.types[i].type.name + "</strong";
    if (i == data.types.length-2){
      pokemontypeContainer.innerHTML+= "/"
    }
    }
    pokeName.insertAdjacentElement("afterend", pokemontypeContainer);
  }


  function insertSprite (data){
    let pokeSprite = document.createElement("img");
    pokeSprite.src = data.sprites.front_default;
    spriteContainer.appendChild(pokeSprite); // Aggiungi l'opzione alla lista
  }


  function insertBst(data){
    let pokeBstContainer = document.createElement("div")
    pokeBstContainer.id= "data-bst-container"
    pokedexBox.appendChild(pokeBstContainer)

    for(let i = 0; i <data.stats.length;i+=2){
    let pokeBstLine = document.createElement("div")
    pokeBstLine.id = "data-bst-line"

    let pokemonBst1 = document.createElement("p")
    pokemonBst1.id = "data-bst"

    let pokemonBst2 = document.createElement("p")
    pokemonBst2.id = "data-bst"

    pokeBstContainer.appendChild(pokeBstLine)
    pokemonBst1.innerHTML = "<strong>" +data.stats[i].stat.name +"</strong>" +":"+ data.stats[i].base_stat
    pokeBstLine.appendChild(pokemonBst1)
    pokemonBst2.innerHTML = "<strong>" +data.stats[i+1].stat.name + "</strong>" +":"+ data.stats[i+1].base_stat
    pokeBstLine.appendChild(pokemonBst2)

     
    }
  }
  






  fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
   insertOption(data)
  })
  .catch(errore => {
    console.log(errore);
  });

cercaPokemon.addEventListener("click",()=>{
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
    insertBst(data)
  })
  } else{
    cleanDiv()
    nomeInesistente()
  }
})



