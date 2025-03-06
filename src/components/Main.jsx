import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import ResultSection from "./ResultSection";
import Loader from "./Loader";

const Main = () => {
  const { movies, series, popularMovies, isLoading, search } =
    useContext(MovieContext);

  return (
    <main className="h-screen bg-gray-900 text-white p-4">
      {isLoading && <Loader />}

      {/* Sezione Film */}
      <div className="h-[30vh]">
        <ResultSection
          title={search ? "Film Ricercati" : "Film più Popolari"}
          items={search ? movies : popularMovies}
        />
      </div>

      {/* Sezione Serie TV */}
      <div className="h-[30vh] mt-8 tv-section">
        <ResultSection
          title={search ? "Serie TV Ricercate" : "Serie TV più Popolari"}
          items={search ? series : popularMovies}
        />
      </div>
    </main>
  );
};

export default Main;
