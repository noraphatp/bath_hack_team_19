import React from "react";
import Routes from "./Routes";
import SearchBar from "./components/SearchBar"
import LocationSearchBar from "./components/LocationSearchBar"
import "./App.css";

function App() {
  return (
    <div className="App">
      <LocationSearchBar />
    </div>
  );
}

export default App;
