import React from "react";
import { useSelector } from "react-redux";
import Card from "./components/card/Card";
import * as selectors from "../../../store/selectors";
import "./cardList.css";

const Text = ({ error, total }) => {
  return error ? (
    <p>{error}</p>
  ) : (
    <p>
      Found <strong>{total}</strong> results
    </p>
  );
};

const CardList = () => {
  const photos = useSelector(selectors.getPhotos);
  const total = useSelector(selectors.getTotal);
  const error = useSelector(selectors.getError);
  const isDisplayText = !(!error && !total);

  return (
    <div className="result">
      {isDisplayText && <Text error={error} total={total} />}
      <div className="cards">
        {photos.map((photo) => {
          return <Card key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
