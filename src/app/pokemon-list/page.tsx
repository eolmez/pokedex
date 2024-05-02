import { getPokemonList } from "../api/pokemonAPI";
import PokemonListCard from "@/components/PokemonListCard";

export default async function PokemonList({ searchParams }: any) {
  const pageNumber = searchParams.page || 1;
  const pokemonList = await getPokemonList(pageNumber);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {pokemonList.map((pokemon: any) => (
          <div className="col-lg-4 col-md-6" key={pokemon.name}>
            <PokemonListCard name={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
