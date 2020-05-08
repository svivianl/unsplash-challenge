import React from "react";
import { useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchForm/SearchForm";
import * as selectors from "../store/selectors";
import "./mainPage.css";

const MainPage = () => {
  const isLoading = useSelector(selectors.getIsLoading);

  return (
    <main>
      <SearchBox />
      <CardList />
      {isLoading && <Loader />}
    </main>
  );
};

export default MainPage;
