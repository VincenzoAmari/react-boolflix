import { useContext } from "react";
import axios from "axios";
import { MovieContext } from "../../context/MovieContext";

const SearchBar = () => {
  const {
    setMovies,
    setSeries,
    setIsLoading,
    search,
    setSearch,
    popularMovies,
    setMovies: setFilteredMovies,
  } = useContext(MovieContext);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchResults = async () => {
    if (!search) {
      setFilteredMovies(popularMovies);
      return;
    }

    setIsLoading(true);
    try {
      const [moviesRes, seriesRes] = await Promise.all([
        axios.get(`${API_URL}/search/movie`, {
          params: { api_key: API_KEY, query: search, language: "it-IT" },
        }),
        axios.get(`${API_URL}/search/tv`, {
          params: { api_key: API_KEY, query: search, language: "it-IT" },
        }),
      ]);
      setMovies(moviesRes.data.results);
      setSeries(seriesRes.data.results);
    } catch (error) {
      console.error("Errore nella ricerca:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca un film o una serie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchResults}>Cerca</button>
    </div>
  );
};

export default SearchBar;
