import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const FilterSelect = () => {
  const { selectedGenre, setSelectedGenre } = useContext(MovieContext);

  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">Tutti i generi</option>
      <option value="28">Azione</option>
      <option value="35">Commedia</option>
      <option value="18">Dramma</option>
    </select>
  );
};

export default FilterSelect;
