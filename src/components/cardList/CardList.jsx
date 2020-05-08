import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../loader/Loader";
import Card from "./components/card/Card";
import ResultTextView from "./components/resultText/ResultTextView";
import * as selectors from "../../store/selectors";
import * as actions from "../../store/actions";
import "./cardList.css";

const CardList = ({ query, page, orientation, setPage }) => {
  const dispatch = useDispatch();
  const { photos, total, error, isLoading } = useSelector(selectors.getState);

  return (
    <div className="result">
      {query && <ResultTextView error={error} total={total} />}
      <InfiniteScroll
        dataLength={photos.length} //This is important field to render the next data
        next={() => {
          dispatch(actions.getPhotos(query, page, orientation));
          setPage(page + 1);
        }}
        hasMore={photos.length < total}
        endMessage={
          Boolean(photos && photos.length) && (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          )
        }
      >
        <div className="cards">
          {photos.map((photo) => {
            return <Card key={photo.id} photo={photo} />;
          })}
        </div>
      </InfiniteScroll>
      {isLoading && <Loader />}
    </div>
  );
};

export default CardList;
