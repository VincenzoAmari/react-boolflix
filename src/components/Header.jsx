// src/components/Header.jsx
import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <h1>BoolFlix</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
