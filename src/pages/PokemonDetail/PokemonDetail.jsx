import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";
import "./pokemonDetail.css";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemonDetailData, setPokemonDetailData] = useState(null);

  useEffect(() => {
    const loadPokemon = async (id) => {
      const pokemonData = await getPokemonById(id);
      setPokemonDetailData(pokemonData);
    };
    loadPokemon(pokemonId);
  }, [pokemonId]);

  return (
    <div className="detail__layout__container">
      {!pokemonDetailData ? (
        <p>Cargando Pokemon</p>
      ) : (
        <article className="detail__general__container">
          <div className="main__dates__general__container">
            <div className="main__img__container">
              <img src={pokemonDetailData.image} alt={pokemonDetailData} />
            </div>

            <section className="first__main__dates__container">
              <h4>#{pokemonDetailData.id}</h4>
              <h2>{pokemonDetailData.name}</h2>
              <ul className="weight__height__container">
                <li>
                  Weight <span>{pokemonDetailData.weight}</span>
                </li>
                <li>
                  Height <span>{pokemonDetailData.height}</span>
                </li>
              </ul>
            </section>

            <section className="type__ability__general__container">
              <article className="type__container">
                <h4>Type</h4>
                <ul>
                  {pokemonDetailData.types.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
                </ul>
              </article>

              <article className="ability__container">
                <h4>Abilities</h4>
                <ul>
                  {pokemonDetailData.abilities.map((ability) => (
                    <li key={ability}>{ability}</li>
                  ))}
                </ul>
              </article>
            </section>
          </div>

          <section className="stats__general__container">
            <h2>Stats</h2>
            <div className="stat__item__container">
              <h5>HP</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.hp}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.hp}/150
                </span>
              </div>
            </div>
            <div className="stat__item__container">
              <h5>ATTACK</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.attack}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.attack}/150
                </span>
              </div>
            </div>
            <div className="stat__item__container">
              <h5>DEFENSE</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.defense}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.defense}/150
                </span>
              </div>
            </div>
            <div className="stat__item__container">
              <h5>SPEED</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.speed}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.speed}/150
                </span>
              </div>
            </div>
            <div className="stat__item__container">
              <h5>ESP ATTACK</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.specialattack}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.specialattack}/150
                </span>
              </div>
            </div>
            <div className="stat__item__container">
              <h5>ESP DEFENSE</h5>
              <div className="stat__bar__container">
                <div
                  style={{ width: `${pokemonDetailData.specialdefense}%` }}
                  className="bar"
                ></div>
                <span className="span__container">
                  {pokemonDetailData.specialdefense}/150
                </span>
              </div>
            </div>
          </section>

          <div className="movements__general__container">
            <h4>Movements</h4>
            {!pokemonDetailData.moves && <p>No hay movimientos</p>}
            <ul className="moves__container">
              {pokemonDetailData.moves.map((move) => (
                <li key={move} className="move__item">
                  <span>{move}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </div>
  );
};

export default PokemonDetail;
