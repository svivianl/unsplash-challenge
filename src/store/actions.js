import * as api from "../api/unsplash.api";
import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from "./types";

export const getPhotos = (query) => (dispatch) => {
  dispatch({ type: GET_PHOTOS });
  api
    .getPhotos(query)
    .then((data) => dispatch({ type: GET_PHOTOS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: GET_PHOTOS_ERROR, payload: error }));
};
