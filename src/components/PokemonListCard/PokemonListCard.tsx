import Link from "next/link";
import Image from "next/image";
import { generateIdString, getUpperCaseName } from "@/utils/helpers";
import PokemonTypeComponent from "../PokemonTypesComponent";

interface PokemonListCardProps {
  pokemon: { id: number; name: string; types: any; image: string };
}

const PokemonListCard = ({ pokemon }: PokemonListCardProps) => {
  const { id, name, types, image } = pokemon;

  return (
    <Link href={name}>
      <div className="card border-0">
        {image && (
          <Image
            src={image}
            className="card-img-top bg-body-tertiary rounded p-3"
            alt={name}
            width={256}
            height={256}
          />
        )}
        <div className="card-body bg-white">
          <p className="card-text text-secondary fs-6 fw-semibold">
            {generateIdString(id)}
          </p>
          <h4 className="card-title fw-medium">{getUpperCaseName(name)}</h4>
          <PokemonTypeComponent types={types} />
        </div>
      </div>
    </Link>
  );
};

export default PokemonListCard;
