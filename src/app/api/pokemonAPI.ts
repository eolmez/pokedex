import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList(page: number) {
  const offset = 9 * (page - 1);
  const response = await axios.get(
    POKEMON_API + `pokemon?limit=9&offset=${offset}`
  );
  return response.data.results;
}

export async function getPokemon(name: string) {
  const response = await axios.get(POKEMON_API + "pokemon/" + name);
  return response.data;
}
