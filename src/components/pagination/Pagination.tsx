import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/filter/slice";

type PaginationTypes = {
  currentPage: number;
};
const Pagination: React.FC<PaginationTypes> = ({ currentPage }) => {
  const dispatch = useDispatch();

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

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
};

export default Pagination;
