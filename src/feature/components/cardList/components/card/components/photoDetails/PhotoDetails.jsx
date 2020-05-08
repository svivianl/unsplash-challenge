import React from "react";
import moment from "moment";
import PhotoDetail from "./components/photoDetail/PhotoDetail";
import "../../../../../../mainPage.css";
import "./photoDetails.css";

const PhotoDetails = ({
  created_at,
  likes,
  alt_description,
  description,
  user,
  urls,
  handleClose,
}) => {
  const { name, location } = user;
  const url = urls.small;
  const createdAt = moment.utc(created_at).format("MMMM D, YYYY");

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="photo-details-modal">
        <p onClick={handleClose}>X</p>
        <div className="photo-details-modal-content">
          <div className="title">
            <div>
              <img alt={alt_description} src={url} />
            </div>
            <h3>Photography's details</h3>
          </div>
          <hr></hr>
          <div className="photo-details">
            {description && (
              <PhotoDetail label="Description" value={description} />
            )}
            <PhotoDetail label="Author" value={name}>
              {user && user.profile_image && user.profile_image.small && (
                <div className="profile-image">
                  <img alt={name} src={user.profile_image.small} />
                </div>
              )}
            </PhotoDetail>
            <PhotoDetail label="Location" value={location} />
            <PhotoDetail label="Likes" value={likes} />
            <PhotoDetail label="Created at" value={createdAt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
