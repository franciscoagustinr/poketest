export const getPokemonInfo = async (pokeId, setCurrentPokemon) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const data = await res.json();
    setCurrentPokemon(data);
  } catch (error) {
    console.log(`Error fetching data ${error}`);
  }
};

export const getPokemons = async (setPoke) => {
  let url = `https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`;
  try {
    const response = await fetch(url);
    const pkmdata = await response.json();

    const pokemonDetails = await Promise.all(
      pkmdata.results.map(async (item) => {
        const response = await fetch(item.url);
        return response.json();
      })
    );

    setPoke(pokemonDetails);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchPokemonEvolutionInfo = async (
  evolutionURL,
  setEvolutions
) => {
  try {
    const res = await fetch(evolutionURL);
    const data = await res.json();
    setEvolutions(data);
  } catch (error) {
    console.log(`Error fetching data ${error}`);
  }
};
