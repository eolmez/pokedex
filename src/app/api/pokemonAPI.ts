import axios from "axios";

const POKEMON_API = process.env.API_HOST;
const count = Number(process.env.LIST_ITEM_COUNT || 1);

export async function getPokemonList(page: number) {
  const offset = count * (page - 1);
  const response = await axios.get(
    POKEMON_API + `pokemon?limit=${count}&offset=${offset}`
  );

  const promiseArray = response.data.results.map((item: any) =>
    axios.get(item.url)
  );

  const pokemonResponses = await Promise.all(promiseArray);

  const pokemons = pokemonResponses.map((response: any) => ({
    id: response.data.id,
    name: response.data.name,
    types: response.data.types,
    image: response.data.sprites?.other?.["official-artwork"]?.front_default,
  }));

  return pokemons;
}

export async function getPokemon(name: string) {
  const response = await axios.get(POKEMON_API + "pokemon/" + name);
  return response.data;
}
