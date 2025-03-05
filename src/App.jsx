import Header from "./components/Header";
import Filters from "./components/Filters/SearchBar";
import FilterSelect from "./components/Filters/FilterSelect";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Filters />
        <FilterSelect />
      </div>
      <Main />
    </div>
  );
};

export default App;
