import React from "react";
import { statColors } from "@/app/colorVariants";
import { colorSelector, getUpperCaseName } from "@/utils/helpers";

const PokemonStatsComponent = ({ stats }: any) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6">
        {stats.map((stats: any) => {
          const statName = stats?.stat?.name;
          const statValue = stats?.base_stat;
          const upperCaseStatName = statName.replace(/-/g, "_");
          const { bgColor: bgColor, color: color } = colorSelector(
            statColors,
            upperCaseStatName
          );
          return (
            <div key={stats.stat.name} className="row mb-2">
              <div className="col align-items-center fw-semibold">
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
                    <span className="fs-6 fw-semibold">{statValue}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStatsComponent;
