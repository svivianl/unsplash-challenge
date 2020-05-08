import React from "react";
import { useSelector } from "react-redux";
import Card from "./components/card/Card";
import ResultText from "./components/resultText/ResultText";
import * as selectors from "../../../store/selectors";
import "./cardList.css";

const CardList = () => {
  const photos = useSelector(selectors.getPhotos);
  const total = useSelector(selectors.getTotal);
  const error = useSelector(selectors.getError);
  const isDisplayText = !(!error && !total);

  return (
    <div className="result">
      {isDisplayText && <ResultText error={error} total={total} />}
      <div className="cards">
        {photos.map((photo) => {
          return <Card key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
