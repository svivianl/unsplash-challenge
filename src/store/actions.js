import * as api from "../api/unsplash.api";
import {
  GET_INITIAL_PHOTOS,
  GET_INITIAL_PHOTOS_SUCCESS,
  GET_INITIAL_PHOTOS_ERROR,
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  GET_PHOTO_DETAILS,
  GET_PHOTO_DETAILS_SUCCESS,
  GET_PHOTO_DETAILS_ERROR,
} from "./types";

export const getInitialPhotos = (query, page = 1, orientation) => (
  dispatch
) => {
  dispatch({ type: GET_INITIAL_PHOTOS });
  api
    .getPhotos(query, page, orientation)
    .then((data) =>
      dispatch({ type: GET_INITIAL_PHOTOS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: GET_INITIAL_PHOTOS_ERROR, payload: error })
    );
};

export const getPhotos = (query, page = 2, orientation) => (dispatch) => {
  dispatch({ type: GET_PHOTOS });
  api
    .getPhotos(query, page, orientation)
    .then((data) => dispatch({ type: GET_PHOTOS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: GET_PHOTOS_ERROR, payload: error }));
};

export const getPhotoDetails = (photoId) => (dispatch) => {
  dispatch({ type: GET_PHOTO_DETAILS });
  api
    .getPhotoDetails(photoId)
    .then((data) =>
      dispatch({ type: GET_PHOTO_DETAILS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: GET_PHOTO_DETAILS_ERROR, payload: error })
    );
};
