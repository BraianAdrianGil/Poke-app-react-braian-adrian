import { Link } from "react-router-dom";
import { useState } from "react";
import { usePagination } from "../../../hooks/usePagination.js";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";

import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10);
  const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(
    pokemons,
    pokemonsPerPage
  );

  const handlePreviousPage = () => {
    changePageTo(currentPage - 1);
  };

  const handleNextPage = () => {
    changePageTo(currentPage + 1);
  };

  const handlePokemonsPerPageChange = (value) => {
    setPokemonsPerPage(value);
    changePageTo(1);
  };

  return (
    <section className="pokemon__list__general__container">
      <div className="pokemon__list__pagination">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onChangePage={changePageTo}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          setPokemonsPerPage={handlePokemonsPerPageChange}
          pokemonsPerPage={pokemonsPerPage}
        />
      </div>

      <div className="grid__pokemons__list">
        {pokemonsSlice.map((pokemon) => (
          <Link
            key={pokemon.url}
            to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
            className="pokemon__card__general__container"
          >
            <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
          </Link>
        ))}
      </div>

      <div className="pokemon__list__pagination">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onChangePage={changePageTo}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          setPokemonsPerPage={handlePokemonsPerPageChange}
          pokemonsPerPage={pokemonsPerPage}
        />
      </div>
    </section>
  );
};

export default PokemonList;
