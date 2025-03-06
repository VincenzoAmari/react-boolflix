import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import ResultSection from "./ResultSection";
import Loader from "./Loader";

const Main = () => {
  const {
    movies,
    popularMovies,
    popularSeries,
    isLoading,
    search,
    selectedGenre,
    series,
  } = useContext(MovieContext);

  // Usa i film e le serie completi, non solo i popolari
  const allMovies = search ? movies : popularMovies;
  const allSeries = search ? series : popularSeries;

  const filteredMovies = selectedGenre
    ? allMovies.filter((movie) =>
        movie.genre_ids.includes(Number(selectedGenre))
      )
    : allMovies;

  const filteredSeries = selectedGenre
    ? allSeries.filter((series) =>
        series.genre_ids.includes(Number(selectedGenre))
      )
    : allSeries;

  return (
    <main className="h-screen bg-gray-900 text-white p-4">
      {isLoading && <Loader />}

      {/* Sezione Film */}
      <div className="h-[50vh]">
        <ResultSection
          title={search ? "Film Ricercati" : "Tutti i Film"}
          items={filteredMovies}
        />
      </div>

      {/* Sezione Serie */}
      <div className="h-[50vh] mt-8">
        <ResultSection
          title={search ? "Serie Ricercate" : "Tutte le Serie"}
          items={filteredSeries}
        />
      </div>
    </main>
  );
};

export default Main;
