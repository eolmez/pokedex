import { generateIdString, getUpperCaseName } from "@/utils/helpers";
import React, { CSSProperties } from "react";

interface PokemonDetailCardProps {
  name: string;
  id: number;
  image: string;
  types: any[];
}

const divStyle: CSSProperties = { maxWidth: "540px" };

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({
  name,
  id,
  image,
  types,
}) => {
  return (
    <div className="container col-6 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex">
        <p className="fs-2 fw-semibold">{getUpperCaseName(name)}</p>
        <p className="text-secondary fs-2 fw-semibold">
          {generateIdString(id)}
        </p>
      </div>
      <div className="card mb-3" style={divStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{getUpperCaseName(name)}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
