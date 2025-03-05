// src/components/Filters/FilterSelect.jsx
import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const FilterSelect = () => {
  const { selectedGenre, setSelectedGenre } = useContext(MovieContext);

  const genres = [
    "", // Tutti
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
  ];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <select
      value={selectedGenre}
      onChange={handleGenreChange}
      className="genre-select"
    >
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre || "Tutti"}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
