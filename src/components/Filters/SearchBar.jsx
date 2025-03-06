import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import axios from "axios";

const SearchBar = () => {
  const {
    setMovies,
    setSeries,
    setIsLoading,
    search,
    setSearch,
    popularMovies,
  } = useContext(MovieContext);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  // Funzione per la ricerca
  const fetchResults = () => {
    if (!search) {
      setMovies(popularMovies);
      setSeries([]);
      return;
    }

    setIsLoading(true);
    axios
      .get(`${API_URL}/search/movie`, {
        params: { api_key: API_KEY, query: search, language: "it-IT" },
      })
      .then((moviesRes) => {
        setMovies(moviesRes.data.results);
      })
      .catch((error) => console.error("Errore nella ricerca film:", error));

    axios
      .get(`${API_URL}/search/tv`, {
        params: { api_key: API_KEY, query: search, language: "it-IT" },
      })
      .then((seriesRes) => {
        setSeries(seriesRes.data.results);
      })
      .catch((error) => console.error("Errore nella ricerca serie:", error))
      .finally(() => setIsLoading(false));
  };

  // Debounce per la ricerca
  useEffect(() => {
    const timeoutId = setTimeout(fetchResults, 500);

    return () => clearTimeout(timeoutId); // Pulizia al termine
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca un film o una serie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
