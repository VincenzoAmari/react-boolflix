import SearchBar from "./Filters/SearchBar";
import FilterSelect from "./Filters/FilterSelect";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h1>BoolFlix</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <SearchBar />
        <FilterSelect />
      </div>
    </header>
  );
};

export default Header;
