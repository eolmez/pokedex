import { getPokemonList } from "../api/pokemonAPI";
import PokemonListCard from "@/components/PokemonListCard";

export default async function PokemonList({ searchParams }: any) {
  const pageNumber = searchParams.page || 1;
  const pokemonList = await getPokemonList(pageNumber);

  return (
    <div className="container col-lg-8 mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pokemonList.map((pokemon: any) => (
          <div
            className="col col-lg-4 col-md-6 d-flex justify-content-center align-items-center"
            key={pokemon.id}
          >
            <PokemonListCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
