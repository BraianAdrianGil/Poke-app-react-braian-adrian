import { useEffect, useState } from "react";
import { getColors } from "../../../utils/getColors/getColors";
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonCard.css";
import "../../../utils/getColors/getColors.css";

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  const typeColors = pokemon?.types[0];
  const color = getColors(typeColors);
  const articleClasses = ` ${color} pokemon__card__general__container`;
  const imgClasses = `${color} pokemon__img__container`;

  useEffect(() => {
    const loadPokemonById = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };
    loadPokemonById();
  }, [pokemonId]);

  return (
    <article className={articleClasses}>
      {!pokemon && (
        <div className="loading__pokemon__card">
          <p>Loading Pokemon</p>
        </div>
      )}
      {pokemon && (
        <>
          {!pokemon.image ? (
            <div className="pokemon__card__loading__case__general__container">
              <p>Loading Image...</p>
            </div>
          ) : (
            <div className={imgClasses}>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          )}

          <div className="pokemon__dates__general__container">
            <section className="pokemon__first__dates__general__container">
              <h2>{pokemon.name}</h2>
              <h4>Type:</h4>
              <ul>
                {pokemon.types.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
            </section>

            <section className="pokemon__second__dates__general__container">
              <div>
                <h5>HP</h5>
                <span>
                  <span>{pokemon.hp}</span>
                </span>
              </div>
              <div>
                <h5>ATTACK</h5>
                <span>{pokemon.attack}</span>
              </div>
              <div>
                <h5>SPEED</h5>
                <span>{pokemon.speed}</span>
              </div>
              <div>
                <h5>DEFENSE</h5>
                <span>{pokemon.defense}</span>
              </div>
            </section>
          </div>
        </>
      )}
    </article>
  );
};

export default PokemonCard;
