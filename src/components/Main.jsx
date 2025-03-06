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

  // Filtro dei film e delle serie in base al genere
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
          title={search ? "Film Ricercati" : "Film più Popolari"}
          items={filteredMovies}
        />
      </div>

      {/* Sezione Serie */}
      <div className="h-[50vh] mt-8">
        <ResultSection
          title={search ? "Serie Ricercate" : "Serie più Popolari"}
          items={filteredSeries}
        />
      </div>
    </main>
  );
};

export default Main;
