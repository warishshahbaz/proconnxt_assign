import React from "react";
import Filter from "./Filter";
import Home from "./Home";
import Paginate from "./Paginate";
import Search from "./Search";

const Outlets = () => {
  return (
    <>
      <Search />
      <Filter />
      <Home />
      <Paginate />
    </>
  );
};

export default Outlets;
