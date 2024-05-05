import axios from "axios";

const POKEMON_API = process.env.API_HOST;
const count = Number(process.env.LIST_ITEM_COUNT || 1);

interface Pokemon {
  id: number;
  name: string;
  types: any[];
  image?: string;
}

export async function getPokemonList(page: number): Promise<Pokemon[]> {
  const offset = count * (page - 1);
  const response = await axios.get(
    `${POKEMON_API}pokemon?limit=${count}&offset=${offset}`
  );

  const pokemonsData = await Promise.all(
    response.data.results.map(async (pokemon: any) => {
      const details = await getPokemon(pokemon.name);
      return {
        id: details.id,
        name: details.name,
        types: details.types,
        image: details.sprites?.other?.["official-artwork"]?.front_default,
      };
    })
  );

  return pokemonsData;
}

export async function getPokemon(name: string) {
  const response = await axios.get(POKEMON_API + "pokemon/" + name);
  return response.data;
}
