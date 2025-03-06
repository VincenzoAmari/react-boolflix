import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const FilterSelect = () => {
  const { genres, selectedGenre, setSelectedGenre } = useContext(MovieContext);

  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">Tutti i generi</option>
      {genres.movies.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name} (Film)
        </option>
      ))}
      {genres.series.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name} (Serie)
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
