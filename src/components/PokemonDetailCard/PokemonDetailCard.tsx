import Image from "next/image";
import { generateIdString, getUpperCaseName } from "@/utils/helpers";
import PokemonTypeComponent from "../PokemonTypesComponent";
import PokemonStatsComponent from "../PokemonStatsComponent";

interface PokemonDetailCardProps {
  pokemonDetail: any;
}

const PokemonDetailCard = ({ pokemonDetail }: PokemonDetailCardProps) => {
  return (
    <>
      <div className="container pb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <p className="fs-2 fw-semibold">
                {getUpperCaseName(pokemonDetail.name)}
              </p>
              <p className="text-secondary fs-2 fw-semibold">
                {generateIdString(pokemonDetail.id)}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-3 bg-body-tertiary d-flex justify-content-center align-items-center">
            <Image
              className="p-2"
              src={
                pokemonDetail.sprites?.other?.["official-artwork"]
                  ?.front_default
              }
              alt={pokemonDetail.name}
              width={256}
              height={256}
            />
          </div>
          <div className="col-12 col-lg-3 pt-2">
            <div className="row mb-3">
              <div className="col fw-semibold">
                Height: {pokemonDetail.height}
              </div>
              <div className="col fw-semibold">
                Weight: {pokemonDetail.weight}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="row">
                  <div className="col fw-semibold">Abilities:</div>
                </div>
                <div className="row">
                  {pokemonDetail.abilities.map(
                    (ability: any, index: number) => (
                      <div key={index} className="col fw-semibold">
                        {getUpperCaseName(ability.ability.name)}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col fw-semibold">Types:</div>
                </div>
                <div className="row">
                  <PokemonTypeComponent types={pokemonDetail.types} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PokemonStatsComponent stats={pokemonDetail.stats} />
      </div>
    </>
  );
};

export default PokemonDetailCard;
