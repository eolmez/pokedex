import PokemonDetailCard from "@/components/PokemonDetailCard";
import { getPokemon } from "../api/pokemonAPI";
import Navbar from "@/components/Navbar";

interface PokemonDetailPageProps {
  params: { pokemonName: string };
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { pokemonName } = params;

  const pokemonDetail = await getPokemon(pokemonName);

  return (
    <>
      <Navbar href="/pokemon-list" label="Back to PokeList" />
      <PokemonDetailCard pokemonDetail={pokemonDetail} />
    </>
  );
}
