// src/context/MovieContext.jsx
import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
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
        isSearching,
        setIsSearching,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
