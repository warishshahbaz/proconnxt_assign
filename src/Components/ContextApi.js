import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let AppContext = createContext();


const AppProvider = ({ children }) => {
  const [listData, setListData] = useState([]);
  const [subStituData, setSubstituData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage] = useState(8);
  const [wishData, setWishData] = useState([]);
  const [descCard, setDescCard] = useState([]);
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);

  const getListData = async (currPage = 1) => {
    let result = await fetch(`https://api.jikan.moe/v4/anime?page=1&limit=8`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //let total = res.pagination.items.count;
        setPageCount(Math.ceil(25 / 8));
        listData == [] ? <h3>Loading...</h3> : setListData(res.data);

        setSubstituData(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getListData();
  }, []);

  /**   Filter **/
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
        wishData,
        setWishData,
        setDescCard,
        descCard,
        moveToHome,
        pageCount,
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
