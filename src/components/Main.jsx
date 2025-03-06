import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import ResultSection from "./ResultSection";
import Loader from "./Loader";

const Main = () => {
  const { movies, series, isLoading } = useContext(MovieContext);

  return (
    <main>
      {isLoading && <Loader />}
      <ResultSection title="Film" items={movies} />
      <ResultSection title="Serie TV" items={series} />
    </main>
  );
};

export default Main;
