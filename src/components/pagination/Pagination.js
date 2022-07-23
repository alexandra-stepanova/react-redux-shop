import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ setCurrentPage, currentPage }) {
  function onChangePage(number) {
    setCurrentPage(number);
  }
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
}

export default Pagination;
