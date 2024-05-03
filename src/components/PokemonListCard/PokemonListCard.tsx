import { CSSProperties } from "react";
import Link from "next/link";
import { generateIdString, getUpperCaseName } from "@/utils/helpers";
import Image from "next/image";

interface PokemonListCardProps {
  pokemon: { id: number; name: string; types: any; image: string };
}

const typeColors = {
  bug: { bgColor: "#729F3F", color: "#fff" },
  dragon: { bgColor: "#53A4CF", color: "#fff" },
  electric: { bgColor: "#F8D030", color: "#000" },
  fairy: { bgColor: "#FDB9E9", color: "#000" },
  fighting: { bgColor: "#D56723", color: "#fff" },
  fire: { bgColor: "#FD7D24", color: "#fff" },
  flying: { bgColor: "#A890F0", color: "#000" },
  ghost: { bgColor: "#7B62A3", color: "#000" },
  grass: { bgColor: "#9BCC50", color: "#000" },
  ground: { bgColor: "#AB9842", color: "#000" },
  ice: { bgColor: "#51C4E7", color: "#000" },
  normal: { bgColor: "#A4ACAF", color: "#000" },
  poison: { bgColor: "#B97FC9", color: "#fff" },
  psychic: { bgColor: "#F366B9", color: "#fff" },
  rock: { bgColor: "#A38C21", color: "#fff" },
  steel: { bgColor: "#9EB7B8", color: "#000" },
  water: { bgColor: "#4592C4", color: "#fff" },
};

const PokemonListCard = ({ pokemon }: PokemonListCardProps) => {
  const { id, name, types, image } = pokemon;

  const divStyle: CSSProperties = { width: "18rem" };
  const pStyle: CSSProperties = { width: "calc((100% - 1rem) / 3)" };

  return (
    <Link href={name}>
      <div className="card border-0" style={divStyle}>
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
          <div className="d-flex gap-2">
            {types.map((type: any, index: number) => {
              const typeColor =
                typeColors[type.type.name as keyof typeof typeColors];
              const bgColor = typeColor?.bgColor;
              const color = typeColor?.color;
              const typeName = getUpperCaseName(type?.type?.name);

              return (
                <p
                  className="border border-0 rounded text-center fs-6"
                  style={{ ...pStyle, backgroundColor: bgColor, color: color }}
                  key={index}
                >
                  {typeName}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonListCard;
