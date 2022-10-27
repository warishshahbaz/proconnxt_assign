import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let AppContext = createContext();

const url = `https://api.jikan.moe/v4/anime`;
const AppProvider = ({ children }) => {
  const [listData, setListData] = useState([]);
  const [subStituData, setSubstituData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage] = useState(8);
  const [wishData, setWishData] = useState([]);
  const [descCard,setDescCard] = useState([]);
  const navigate = useNavigate();

  const getListData = async () => {
    let result = await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        listData == [] ? <h3>Loading...</h3> : setListData(res.data);

        setSubstituData(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getListData();
  }, []);

  /**   Filters **/
  const comedySearch = () => {
    setListData(subStituData);
    let res = subStituData.filter((val) => {
      return val.genres.some((val) => val.name == "Comedy");
    });
    if (res) {
      setListData(res);
    }
  };

  const actionSearch = () => {
    setListData(subStituData);
    let res = subStituData.filter((val) => {
      return val.genres.some((val) => val.name == "Action");
    });
    if (res) {
      setListData(res);
    }
  };
  const advantureSearch = () => {
    setListData(subStituData);
    let res = subStituData.filter((val) => {
      return val.genres.some((val) => val.name == "Adventure");
    });
    setListData(res);
  };

  const mystrerySearch = () => {
    setListData(subStituData);
    let res = subStituData.filter((val) => {
      return val.genres.some((val) => val.name == "Mystery");
    });
    setListData(res);
  };

  /***  Pagination  **/
  const indexOfLastPage = currentPage * showPerPage;
  const indexOfFirstPage = indexOfLastPage - showPerPage;
  const currentState = listData.slice(indexOfFirstPage, indexOfLastPage);
  const totalPage = listData.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /** move to home page */

  const moveToHome = () => {
    navigate("/");
  };

  return (
    <AppContext.Provider
      value={{
        listData,
        setListData,
        getListData,
        comedySearch,
        actionSearch,
        advantureSearch,
        mystrerySearch,
        showPerPage,
        totalPage,
        paginate,
        currentState,
        wishData,
        setWishData,
        setDescCard,
        descCard,
        moveToHome,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
