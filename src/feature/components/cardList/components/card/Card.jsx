import React, { Fragment, useState } from "react";
import PhotoDetails from "./components/photoDetailsA/PhotoDetails";
import "./card.css";

const Card = ({ photo }) => {
  const [isPhotoDetailsOpen, setIsPhotoDetailsOpen] = useState(false);
  const url = photo.urls.small;
  const { alt_description, user, description } = photo;

  const handleOnCardClick = () => {
    setIsPhotoDetailsOpen(true);
  };

  const handleOnPhotoClick = () => {
    setIsPhotoDetailsOpen(false);
  };

  return (
    <Fragment>
      <div className="card" onClick={handleOnCardClick}>
        <img alt={alt_description} src={url} />
      </div>
      {isPhotoDetailsOpen && (
        <PhotoDetails
          user={user}
          description={description}
          handleClose={handleOnPhotoClick}
        />
      )}
    </Fragment>
  );
};

export default Card;
