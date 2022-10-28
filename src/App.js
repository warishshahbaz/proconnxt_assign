import "./App.css";
import { Routes, Route } from "react-router-dom";
import Outlets from "./Components/Outlet";
import CardDetail from "./Components/CardDetail";
import DescCard from "./Components/DescCard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" index element={<Outlets />} />
        <Route path="/cards" element={<CardDetail />} />
        <Route path="/desc" element={<DescCard />} />
      </Routes>
    </>
  );
}

export default App;
