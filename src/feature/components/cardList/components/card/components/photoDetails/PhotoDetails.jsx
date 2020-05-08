import React from "react";
import PhotoDetail from "./components/photoDetail/PhotoDetail";
import "../../../../../../mainPage.css";
import "./photoDetails.css";

const PhotoDetails = ({ user, description, handleClose }) => {
  const { name, location } = user;

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="photo-details-modal">
        <p onClick={handleClose}>X</p>
        <div className="photo-details-modal-content">
          <h3>Photography's details</h3>
          <hr></hr>
          <div className="photo-details">
            {description && (
              <PhotoDetail label="Description" value={description} />
            )}
            <PhotoDetail label="Photographer's name" value={name} />
            <PhotoDetail label="Location" value={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
