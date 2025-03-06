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
  const [popularSeries, setPopularSeries] = useState([]); // Aggiunta per le serie popolari
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Funzione per ottenere i film popolari
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

    // Funzione per ottenere le serie TV popolari
    const fetchPopularSeries = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API_URL}/tv/popular`, {
          params: { api_key: API_KEY, language: "it-IT" },
        });
        setPopularSeries(res.data.results); // Salviamo le serie popolari
      } catch (error) {
        console.error("Errore nel caricamento delle serie popolari:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Carichiamo sia i film che le serie
    fetchPopularMovies();
    fetchPopularSeries();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        popularMovies,
        setPopularMovies,
        popularSeries,
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
