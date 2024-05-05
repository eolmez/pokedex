import { getPokemon } from "../api/pokemonAPI";
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
      <PokemonDetailCard pokemonDetail={pokemonDetail} />
    </>
  );
}
