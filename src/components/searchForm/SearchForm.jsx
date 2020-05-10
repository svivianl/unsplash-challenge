import React, { useState } from "react";
import { useSelector } from "react-redux";
import Orientations from "./orientations/Orientations";
import * as selectors from "../../store/selectors";
import "./searchForm.css";

const SearchBox = ({ setQuery, orientation, setOrientation }) => {
  const [inputValue, setInputValue] = useState("");
  const isLoading = useSelector(selectors.getIsLoading);

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
        <button type="submit" alt="Search" disabled={isLoading}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
