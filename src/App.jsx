import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/Filters/SearchBar";
import FilterSelect from "./components/Filters/FilterSelect";
import Main from "./components/Main";
import { MovieContext } from "./context/MovieContext";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      <Header />
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <SearchBar />
        <FilterSelect />
      </div>
      <Main />
    </MovieContext.Provider>
  );
};

export default App;
