// src/App.jsx
import React from "react";
import { MovieProvider } from "./context/MovieContext";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Main />
      </div>
    </MovieProvider>
  );
}

export default App;
