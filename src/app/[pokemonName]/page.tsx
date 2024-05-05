import { getPokemon } from "../api/pokemonAPI";
import PokemonDetailCard from "../../components/PokemonDetailCard";
import Navbar from "@/components/Navbar";

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
