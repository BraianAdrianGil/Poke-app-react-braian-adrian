import { useState, useEffect } from "react";

export const usePagination = (list, quantityPerPage) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const newTotalPages = Math.ceil(list.length / quantityPerPage);
    setTotalPages(newTotalPages);

    if (pageNumber > newTotalPages) {
      setPageNumber(newTotalPages);
    }
  }, [list, quantityPerPage, pageNumber]);

  const lowerLimit = quantityPerPage * (pageNumber - 1);
  const highestLimit = quantityPerPage * pageNumber - 1;
  const listSlice = list.slice(lowerLimit, highestLimit + 1);

  const changePageTo = (page) => {
    if (page > totalPages) {
      setPageNumber(totalPages);
    } else if (page < 1) {
      setPageNumber(1);
    } else {
      setPageNumber(page);
    }
  };

  return [pageNumber, totalPages, listSlice, changePageTo];
};
