export const getUpperCaseName = (name: string) => {
  if (name.length === 2) {
    return name.toUpperCase();
  }

  if (name.includes("-")) {
    const words = name.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  }

  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

export const generateIdString = (id: number) =>
  `#${id.toString().padStart(4, "0")}`;

export const colorSelector = (
  colors: Record<string, { bgColor: string; color: string }>,
  name: string
) => {
  const colorVariants = colors[name as keyof typeof colors];
  const bgColor = colorVariants?.bgColor;
  const color = colorVariants?.color;

  return { bgColor, color };
};
