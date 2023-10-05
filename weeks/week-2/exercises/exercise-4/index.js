// Arrays Exercise

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  let length = pokemons.length;
  console.log(length);
};
countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort())
};
orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse());
};
flipThem();
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  const upperCasePokemonList = pokemons.map((poke) => poke.toUpperCase());
  console.log(upperCasePokemonList);
};
makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  // const filteredPokemonList = pokemons.filter((poke) => poke[0] === 'B');
  console.log(pokemons.filter((letter)=>letter[0] === "B"));
};
onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
   
   const removedCpokemonList = pokemons.filter(pokemon => !pokemon.startsWith("C"));
   
   console.log(removedCpokemonList)
};
notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  
    pokemons.forEach((pokemon, index) => {
      const pokemonNumber = index + 1; // Adding 1 to the index to make it a "number x"
      console.log(`Number ${pokemonNumber} - ${pokemon}`);
    });
  
};
nameAndIdThanks();

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(pokemons)
};
catchPokemon('Kalyani');

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.filter((poke) =>  poke === name));
};
didICatchIt('Kalyani')

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  
    // Use splice to add "Clefairy" in the third place (index 2)
    pokemons.splice(2, 0, "Clefairy");
  
    // Print the updated list
    console.log(pokemons);
  };
  
  // Call the function to add "Clefairy" and print the updated list
  addInThirdPlace();


// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
 
    const longestNamePokemon = pokemons.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  
    return longestNamePokemon;
  };
  
  // Call the function to find the Pokémon with the longest name
  const longestName = theLongestName();
  console.log(`The Pokémon with the longest name is: ${longestName}`);
  

