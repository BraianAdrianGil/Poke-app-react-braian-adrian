import classNames from "classnames";

export const getColors = (type) => {
  return classNames({
    normal: type === "normal",
    grass: type === "grass",
    water: type === "water",
    fire: type === "fire",
    fighting: type === "fighting",
    poison: type === "poison",
    ground: type === "ground",
    rock: type === "rock",
    bug: type === "bug",
    ghost: type === "ghost",
    steel: type === "steel",
    ice: type === "ice",
    dragon: type === "dragon",
    dark: type === "dark",
    fairy: type === "fairy",
    electric: type === "electric",
    psychic: type === "psychic",
    flying: type === "flying",
  });
};
