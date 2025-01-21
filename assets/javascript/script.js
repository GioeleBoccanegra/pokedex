
  const pokemonLista = document.querySelector("[data-pokemon]");

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
      count++
    }
  })
  .catch(errore => {
    console.log(errore);
  });



