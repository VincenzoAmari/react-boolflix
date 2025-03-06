import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { MovieContext } from "./context/MovieContext";
import axios from "axios";
import "./index.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [genres, setGenres] = useState({ movies: [], series: [] });
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: "it-IT" },
        });
        setPopularMovies(res.data.results);
      } catch (error) {
        console.error("Errore nel caricamento dei film popolari:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchPopularSeries = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API_URL}/tv/popular`, {
          params: { api_key: API_KEY, language: "it-IT" },
        });
        setPopularSeries(res.data.results);
      } catch (error) {
        console.error("Errore nel caricamento delle serie popolari:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchGenres = async () => {
      try {
        const [movieGenresRes, seriesGenresRes] = await Promise.all([
          axios.get(`${API_URL}/genre/movie/list`, {
            params: { api_key: API_KEY, language: "it-IT" },
          }),
          axios.get(`${API_URL}/genre/tv/list`, {
            params: { api_key: API_KEY, language: "it-IT" },
          }),
        ]);
        setGenres({
          movies: movieGenresRes.data.genres,
          series: seriesGenresRes.data.genres,
        });
      } catch (error) {
        console.error("Errore nel caricamento dei generi:", error);
      }
    };

    fetchPopularMovies();
    fetchPopularSeries();
    fetchGenres();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        popularMovies,
        popularSeries,
        genres,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      <Header />
      <Main />
    </MovieContext.Provider>
  );
};

export default App;
