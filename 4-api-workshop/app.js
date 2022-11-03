// getting the pokedex elements from the html
const pokedex = document.getElementById('pokedex');

// we want to make a API call to call and fetch the pokemons
// create a function call "fetchPokemon", a fetch API to fetch
// the information about the pokemon
const fetchPokemon = () => {
  // make empty array of promises
  const promises = [];
  // loop it through to display 150 pokemon
  for (let i = 1; i <= 150; i++) {
    // API link
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    /*how fetch works 
    do a fetch, pass in the url. What is returns in .then() is a promise
    in here, you find your callback, an arrow function
    after you make the request, nad then it response (res)
    then it will convert that response to json, and get that body
    of information
    */
    // fetch(url).then( res => res.json())
    // push a new promise into the array
    promises.push(fetch(url).then((res) => res.json()));
    /**
     * individual promises, this is slower than what we up previously
     * fetch(url)
     *      .then((res => {
     *          return res.json();
     *      })
     *      .then((data) => {
     *          console.log(data);
     *
     *      const pokemon ={
     *          name: data.name,
     *          id: data.id,
     *          image: data.sprites['front_default'],
     *          type: data.types.map((type) => type.type.name).join(', ')
     *      };
     *      console.log(pokemon);
     * })
     * )
     */
  }
  // creating a new function to return all the promises
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites['front_default'],
      type: result.types.map((type) => type.type.name).join(', '),
      id: result.id,
    }));
    // we want to display the pokemon deck
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  // mapping each pokemon into their individual "card"
  const pokemonHTMLString = pokemon
    .map(
      // mapping them into their according string
      // back-ticks can use multiline, and use variables
      (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
    )
    // gather all the li elements together
    .join('');
  pokedex.innerHTML = pokemonHTMLString;
};

// call the function at the end
fetchPokemon();
