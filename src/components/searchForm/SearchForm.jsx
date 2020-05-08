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
          aria-label="Search"
          type="search"
          placeholder="search photos"
          value={inputValue}
          onChange={handleChange}
        />
        <div className="mobile">
          <Orientations
            size="mobile"
            orientation={orientation}
            setOrientation={setOrientation}
          />
        </div>
        <button type="submit" alt="Search">
          Search
        </button>
      </div>
      <div className="desktop">
        <Orientations
          size="desktop"
          orientation={orientation}
          setOrientation={setOrientation}
        />
      </div>
    </form>
  );
};

export default SearchBox;
