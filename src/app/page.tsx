import { getPokemonList } from "./api/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  console.log(pokemonList);
  return <div>Pokedex</div>;
}
