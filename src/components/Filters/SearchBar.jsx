import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchBar = () => {
  const { search, setSearch, setMovies, setSeries, setIsLoading } =
    useContext(MovieContext);

  const searchContent = () => {
    if (!search) return;
    setIsLoading(true);

    const moviesRequest = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=it-IT`
    );
    const seriesRequest = axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}&language=it-IT`
    );

    Promise.all([moviesRequest, seriesRequest])
      .then((responses) => {
        const [moviesRes, seriesRes] = responses;
        setMovies(moviesRes.data.results);
        setSeries(seriesRes.data.results);
      })
      .catch((error) => {
        console.error("Errore nella ricerca:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca un film o una serie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchContent}>Cerca</button>
    </div>
  );
};

export default SearchBar;
