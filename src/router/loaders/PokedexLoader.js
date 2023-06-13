import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByTypeId } from "../../services/getPokemonsByTypeId";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonTypeId = url.searchParams.get("pokemonType") ?? "";

  let pokemons;

  if (pokemonName && pokemonTypeId) {
    //Filtros cruzados : se envía tanto nombre como tipo
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonTypeId) {
    //Obtener todos los pokemones
    pokemons = await getAllPokemons();
  } else if (pokemonName) {
    //Obtener todos los pokemones  que tengan el valor del input con el name pokemonName.
    pokemons = await getAllPokemons();
    //filtro para que si es mayúscula o minúscula
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (pokemonTypeId) {
    //Obtener los pokemones que sean del tipo del select con el name pokemonTypes
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
  }

  return { pokemons, pokemonName, pokemonTypeId };
};
