import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import ResultSection from "./ResultSection";
import Loader from "./Loader";

const Main = () => {
  const { movies, series, popularMovies, isLoading, search } =
    useContext(MovieContext);

  return (
    <main>
      {isLoading && <Loader />}
      {search ? (
        <>
          <ResultSection title="Film Ricercati" items={movies} />
          <ResultSection title="Serie TV Ricercate" items={series} />
        </>
      ) : (
        <ResultSection title="Film più Popolari" items={popularMovies} />
      )}
    </main>
  );
};

export default Main;
