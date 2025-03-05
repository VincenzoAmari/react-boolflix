import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "./Card";

const ResultSection = () => {
  const { movies, series, selectedGenre } = useContext(MovieContext);

  const filterByGenre = (item) => {
    if (!selectedGenre) return true;

    return item.genre_ids?.includes(selectedGenre) || true;
  };

  return (
    <div className="result-section">
      {movies.filter(filterByGenre).map((movie) => (
        <Card key={movie.id} media={movie} type="movie" />
      ))}
      {series.filter(filterByGenre).map((show) => (
        <Card key={show.id} media={show} type="series" />
      ))}
    </div>
  );
};

export default ResultSection;
