import { getPokemon } from "../api/pokemonAPI";
import Navbar from "@/components/Navbar";
import PokemonDetailCard from "../../components/PokemonDetailCard";

export default async function PokemonDetailPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonDetail = await getPokemon(pokemonName);

  return (
    <>
      <Navbar href="/pokemon-list" label="Back to PokeList" />
      <PokemonDetailCard pokemonDetail={pokemonDetail} />
    </>
  );
}
