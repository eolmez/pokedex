import { typeColors } from "@/app/colorVariants";
import { colorSelector, getUpperCaseName } from "@/utils/helpers";

const PokemonTypeComponent = ({ types }: any) => {
  return (
    <div className="d-flex gap-2">
      {types.map((type: any, index: number) => {
        const typeName = getUpperCaseName(type?.type?.name);
        const { bgColor, color } = colorSelector(typeColors, type?.type?.name);
        return (
          <p
            className="border border-0 rounded text-center fs-6"
            style={{
              width: "calc((100% - 1rem) / 3)",
              backgroundColor: bgColor,
              color: color,
            }}
            key={index}
          >
            {typeName}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonTypeComponent;
