import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import "./Pokedex.css";

import PokemonList from "../../components/PokedexComponents/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import FiltersForm from "../../components/PokedexComponents/FiltersForm/FiltersForm";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContext);

  return (
    <section className="pokedex__page__general__container">
      <div className="welcome__pokedex__page__container">
        <p>
          <span>Welcome {userName}</span>, here you will find all your favorites
          pokemons!
        </p>
      </div>
      <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

      {!pokemons.length ? (
        <p>No hay pokemones</p>
      ) : (
        <PokemonList pokemons={pokemons} pokemonTypeId={pokemonTypeId} />
      )}
    </section>
  );
};

export default Pokedex;
