import { axiosInstance } from "../api/axiosInstance";

const getPokemonImg = (sprites) => {
  const firstOption = sprites.other["official-artwork"].front_default;
  const secondOption = sprites.other.dream_world.front_default;
  const thirdOption = sprites.other.home.front_default;
  if (firstOption) return firstOption;
  if (secondOption) return secondOption;
  if (thirdOption) return thirdOption;

  //return imagen de un pokemon con signo de interrogación.
};

export const getPokemonById = async (id) => {
  try {
    const res = await axiosInstance.get(`pokemon/${id}`);
    const pokemonData = res.data;

    const adaptedPokemon = {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      abilities: pokemonData.abilities.map((ability) => ability.ability.name),
      moves: pokemonData.moves.map((move) => move.move.name),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      specialattack: pokemonData.stats[3].base_stat,
      specialdefense: pokemonData.stats[4].base_stat,
      speed: pokemonData.stats[5].base_stat,
      image: getPokemonImg(pokemonData.sprites),
    };

    return adaptedPokemon;
  } catch (error) {
    console.error(error);
  }
};
