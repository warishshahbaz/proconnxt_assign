import React from "react";

import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "./ContextApi";

const Paginate = () => {
  const [items, setItems] = useState([]);

  const { setListData, listData, getListData, pageCount } = useGlobalContext();

  const getData = async (currPage) => {
    let result = await fetch(
      `https://api.jikan.moe/v4/anime?page=${currPage}&limit=8`
    );
    result = await result.json();

    return result.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFromServer = await getData(currentPage);

    setListData(commentsFromServer);
    console.log(listData);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Paginate;
