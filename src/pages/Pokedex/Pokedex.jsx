import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./Pokedex.css";

import PokemonList from "../../components/PokedexComponents/PokemonList/PokemonList";
import FiltersForm from "../../components/PokedexComponents/FiltersForm/FiltersForm";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContext);
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();
  const logOut = () => {
    removeUserName();
    navigate("/");
  };

  return (
    <section className="pokedex__page__general__container">
      <div className="ash__pikachu__container">
        <div className="ash__pikachu__img"></div>
      </div>
      <div className="welcome__pokedex__page__container">
        <p>
          <span>Welcome {userName}</span>, here you will find all your favorites
          pokemons!
        </p>
        <button onClick={logOut} className="log__out">
          Log out
        </button>
      </div>
      <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

      {!pokemons.length ? (
        <div className="no__pokemons">
          <p>No hay pokemones</p>
        </div>
      ) : (
        <PokemonList pokemons={pokemons} pokemonTypeId={pokemonTypeId} />
      )}
    </section>
  );
};

export default Pokedex;
