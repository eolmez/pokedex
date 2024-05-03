export const getUpperCaseName = (name: string) => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

export const generateIdString = (id: number) =>
  `#${id.toString().padStart(4, "0")}`;
