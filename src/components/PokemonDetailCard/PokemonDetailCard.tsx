import {
  colorSelector,
  generateIdString,
  getUpperCaseName,
} from "@/utils/helpers";
import Image from "next/image";
import { statColors } from "@/app/colorVariants";
import PokemonTypeComponent from "../PokemonTypeComponent";

interface PokemonDetailCardProps {
  pokemonDetail: any;
}

const PokemonDetailCard = ({ pokemonDetail }: PokemonDetailCardProps) => {
  return (
    <>
      <div className="container pb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center p-2">
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
              <div className="col">Height: {pokemonDetail.height}</div>
              <div className="col">Weight: {pokemonDetail.weight}</div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="row">
                  <div className="col">Abilities:</div>
                </div>
                <div className="row">
                  {pokemonDetail.abilities.map(
                    (ability: any, index: number) => (
                      <div key={index} className="fs-6 col">
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
                  <div className="col">Types:</div>
                </div>
                <div className="row">
                  <PokemonTypeComponent types={pokemonDetail.types} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            {pokemonDetail.stats.map((stats: any) => {
              const statName = stats?.stat?.name;
              const statValue = stats?.base_stat;
              const { bgColor: bgColor, color: color } = colorSelector(
                statColors,
                stats?.stat?.name
              );
              return (
                <div key={stats.stat.name} className="row mb-2">
                  <div className="col align-items-center">
                    {getUpperCaseName(statName)}
                  </div>
                  <div className="col">
                    <div
                      className="progress"
                      style={{ height: "25px" }}
                      role="progressbar"
                      aria-label={statName}
                      aria-valuenow={statValue}
                      aria-valuemin={0}
                      aria-valuemax={150}
                    >
                      <div
                        className={`progress-bar ${bgColor} ${color}`}
                        style={{ width: `${statValue}%` }}
                      >
                        <span className="fs-6">{statValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailCard;
