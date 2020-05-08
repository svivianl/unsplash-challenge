import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import "./searchForm.css";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
    event.preventDefault();
  };

  const handleOnSubmit = (event) => {
    dispatch(actions.getPhotos(inputValue));
    event.preventDefault();
    setInputValue("");
  };

  return (
    <form className="search-form" onSubmit={handleOnSubmit}>
      <input
        aria-label="Search"
        type="search"
        placeholder="search photos"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" alt="Search">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
