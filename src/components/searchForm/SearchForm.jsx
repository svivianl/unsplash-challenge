import React, { useState } from "react";
import Orientations from "./orientations/Orientations";
import "./searchForm.css";

const SearchBox = ({ setQuery, orientation, setOrientation }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    event.preventDefault();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setQuery(inputValue);
  };

  return (
    <form className="search-form" onSubmit={handleOnSubmit}>
      <div className="search-container">
        <input
          className="search"
          aria-label="Search"
          type="search"
          placeholder="search photos"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleOnSubmit}
        />
        <div className="orientations-container">
          <Orientations
            orientation={orientation}
            setOrientation={setOrientation}
          />
        </div>
        <button type="submit" alt="Search">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
