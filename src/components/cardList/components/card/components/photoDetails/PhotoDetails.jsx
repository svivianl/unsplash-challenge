import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import PhotoDetailView from "./components/photoDetail/PhotoDetailView";
import * as actions from "../../../../../../store/actions";
import * as selectors from "../../../../../../store/selectors";
import "../../../../../../App.css";
import "./photoDetails.css";

const PhotoDetails = ({
  id,
  created_at,
  likes,
  alt_description,
  description,
  user,
  urls,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const photoDetails = useSelector(selectors.getPhotoDetails);

  useEffect(() => {
    if (id) {
      dispatch(actions.getPhotoDetails(id));
    }
  }, [id, dispatch]);

  const { name, location } = user;
  const { location: photoLocation } = photoDetails;
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
            <h3>Photography's details:</h3>
          </div>
          <div className="photo-details">
            {description && (
              <PhotoDetailView label="Description" value={description} />
            )}
            <PhotoDetailView label="Likes" value={likes} />
            {photoLocation && photoLocation.city && photoLocation.country && (
              <PhotoDetailView
                label="Location"
                value={`${photoLocation.city} - ${photoLocation.country}`}
              />
            )}
            <PhotoDetailView label="Created at" value={createdAt} />
          </div>
          <hr></hr>
          <div className="photo-details">
            <h4>Author's details:</h4>
            <PhotoDetailView label="Name" value={name} alignCenter={true}>
              {user && user.profile_image && user.profile_image.small && (
                <div className="profile-image">
                  <img alt={name} src={user.profile_image.small} />
                </div>
              )}
            </PhotoDetailView>
            {location && <PhotoDetailView label="Location" value={location} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
