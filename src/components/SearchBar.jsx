import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";

const SearchBar = () => {
  const { setMovies, setSeries, setSearch, setIsSearching, setIsLoading } =
    useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");

  const searchMedia = () => {
    setSearch(inputValue);
    setIsSearching(true);
    setIsLoading(true);

    // Ricerca film
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${inputValue}&language=it-IT`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error("Errore nella ricerca dei film:", error))
      .finally(() => setIsLoading(false));

    // Ricerca serie TV
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${inputValue}&language=it-IT`
      )
      .then((response) => {
        setSeries(response.data.results);
      })
      .catch((error) =>
        console.error("Errore nella ricerca delle serie TV:", error)
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Cerca film o serie TV..."
      />
      <button onClick={searchMedia}>Cerca</button>
    </div>
  );
};

export default SearchBar;
