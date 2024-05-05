import { getPokemonList } from "../api/pokemonAPI";
import Navbar from "@/components/Navbar";
import PokemonListCard from "@/components/PokemonListCard";
import Pagination from "@/components/Pagination";

export default async function PokemonList({ searchParams }: any) {
  const pageNumber = searchParams.page || 1;
  const pokemonList = await getPokemonList(pageNumber);

  return (
    <>
      <Navbar href="/" label="Back to Pokedex" />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="row g-4">
              {pokemonList?.map((pokemon: any) => (
                <div className="col-12 col-md-4" key={pokemon.id}>
                  <PokemonListCard pokemon={pokemon} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination pageNumber={Number(pageNumber)} />
      </div>
    </>
  );
}
