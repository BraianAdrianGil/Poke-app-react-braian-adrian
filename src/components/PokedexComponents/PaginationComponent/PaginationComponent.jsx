import { useState, useEffect } from "react";
import "./PaginationComponent.css";

const PaginationComponent = ({
  totalPages,
  currentPage,
  onChangePage,
  onNextPage,
  onPreviousPage,
  setPokemonsPerPage,
  pokemonsPerPage,
}) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  useEffect(() => {
    const totalPages = pagesArray.length;
    const groupSize = 5;
    const currentPageIndex = currentPage - 1;

    let newStartIndex = currentPageIndex - Math.floor(groupSize / 2);
    let newEndIndex = currentPageIndex + Math.floor(groupSize / 2);

    if (newStartIndex < 0) {
      newStartIndex = 0;
      newEndIndex = Math.min(groupSize - 1, totalPages - 1);
    }

    if (newEndIndex >= totalPages) {
      newStartIndex = Math.max(totalPages - groupSize, 0);
      newEndIndex = totalPages - 1;
    }

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [currentPage, pagesArray]);

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onChangePage(page);
    }
  };

  const handleSelectChange = (e) => {
    const value = parseInt(e.target.value);
    setPokemonsPerPage(value);
    // Reset to the first page when changing the number of pokemons per page
    onChangePage(1);
  };

  return (
    <div className="pagination__btns__general__container">
      <div className="dinamic__btns__container">
        {startIndex > 0 && (
          <button onClick={() => handlePageChange(1)}>1</button>
        )}
        {startIndex > 1 && <span>...</span>}
        {pagesArray.slice(startIndex, endIndex).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        {endIndex < totalPages - 1 && <span>...</span>}
        {endIndex < totalPages && (
          <button onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        )}
      </div>

      <div className="secondary__btns__general__container">
        <div className="next__previous__btns__container">
          <button onClick={onPreviousPage}>Previous</button>
          <button onClick={onNextPage}>Next</button>
        </div>

        <div className="select__btn__general__container">
          <select
            name=""
            id=""
            value={pokemonsPerPage}
            onChange={handleSelectChange}
          >
            <option value="10">10 (Default)</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
