import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardList from "./components/cardList/CardList";
import SearchForm from "./components/searchForm/SearchForm";
import * as actions from "./store/actions";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [orientation, setOrientation] = useState("");
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getInitialPhotos(query, 1, orientation));
    setPage(2);
  }, [dispatch, orientation, query]);

  return (
    <div className="App">
      <header>
        <h1>Unsplash Gallery</h1>
      </header>
      <main>
        <SearchForm
          setQuery={setQuery}
          orientation={orientation}
          setOrientation={setOrientation}
        />
        <CardList
          query={query}
          page={page}
          orientation={orientation}
          setPage={setPage}
        />
      </main>
    </div>
  );
};

export default App;
