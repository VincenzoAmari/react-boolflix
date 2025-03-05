// src/components/Main.jsx
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Header from "./Header";
import Filters from "./Filters";
import ResultSection from "./ResultSection";
import Loader from "./Loader";

const Main = () => {
  const { isLoading } = useContext(MovieContext);

  return (
    <main className="main">
      <Header />
      <Filters />
      {isLoading ? <Loader /> : <ResultSection />}
    </main>
  );
};

export default Main;
