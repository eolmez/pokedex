import { getUpperCaseName } from "@/utils/helpers";
import React, { CSSProperties } from "react";

interface PokemonDetailCardProps {
  image: string;
  name: string;
  types: any[];
}

const divStyle: CSSProperties = { width: "18rem" };

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({
  image,
  name,
  types,
}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card mt-5 border border-danger" style={divStyle}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{getUpperCaseName(name)}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          {types.map((type) => (
            <a
              key={type.type.name}
              href="#"
              className="card-link text-decoration-none"
            >
              {getUpperCaseName(type.type.name)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
