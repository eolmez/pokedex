import { CSSProperties } from "react";
import Link from "next/link";
import { getUpperCaseName } from "@/utils/helpers";

const divStyle: CSSProperties = { width: "18rem" };

interface PokemonGridCardProps {
  name: string;
}

const PokemonListCard = ({ name }: PokemonGridCardProps) => {
  return (
    <Link href={name}>
      <div className="card col mt-5" style={divStyle}>
        <div className="card-body d-flex justify-content-center align-items-center">
          <h5 className="card-title">{getUpperCaseName(name)}</h5>
        </div>
      </div>
    </Link>
  );
};

export default PokemonListCard;
