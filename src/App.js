import "./App.css";
import Filter from "./Components/Filter";
import Home from "./Components/Home";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import {Routes, Route } from "react-router-dom";
import Outlets from "./Components/Outlet";
import CardDetail from "./Components/CardDetail";
import DescCard from "./Components/DescCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cards" element={<CardDetail />} />
        <Route exact path="/" index element={<Outlets />} />
        <Route path="/desc" element={<DescCard/>} />
      </Routes>
    </>
  );
}

export default App;
