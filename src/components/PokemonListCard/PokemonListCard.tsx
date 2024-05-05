import Link from "next/link";
import { generateIdString, getUpperCaseName } from "@/utils/helpers";
import Image from "next/image";
import PokemonTypeComponent from "../PokemonTypeComponent";

interface PokemonListCardProps {
  pokemon: { id: number; name: string; types: any; image: string };
}

const PokemonListCard = ({ pokemon }: PokemonListCardProps) => {
  const { id, name, types, image } = pokemon;

  return (
    <Link href={name}>
      <div className="card border-0" style={{ width: "18rem" }}>
        <Image
          src={image}
          className="card-img-top bg-body-tertiary rounded pt-3 pb-2"
          alt={name}
          width={188}
          height={182}
        />
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
