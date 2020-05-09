import { cloneDeep } from "lodash";
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

const initialStateSearch = {
  isLoading: false,
  photos: [],
  error: "",
  total: 0,
  totalPages: 0,
  photoDetails: {},
};

export const unsplashReducer = (state = initialStateSearch, action = {}) => {
  const photosCloned = cloneDeep(state.photos);

  switch (action.type) {
    case GET_INITIAL_PHOTOS:
      return {
        ...state,
        isLoading: true,
        photos: [],
        error: "",
        total: 0,
        totalPages: 0,
      };
    case GET_PHOTOS:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_PHOTO_DETAILS:
      return {
        ...state,
        isLoading: true,
        photoDetails: {},
      };
    case GET_INITIAL_PHOTOS_SUCCESS:
      const resultsCloned = action.payload.hasOwnProperty("results")
        ? cloneDeep(action.payload.results)
        : cloneDeep(action.payload);

      return {
        ...state,
        photos: resultsCloned,
        total: action.payload.total,
        totalPages: action.payload.total_pages,
        isLoading: false,
      };
    case GET_PHOTOS_SUCCESS:
      const morePhotos = action.payload.hasOwnProperty("results")
        ? action.payload.results
        : action.payload;

      return {
        ...state,
        photos: [...photosCloned, ...morePhotos],
        total: action.payload.total,
        totalPages: action.payload.total_pages,
        isLoading: false,
      };
    case GET_PHOTO_DETAILS_SUCCESS:
      return {
        ...state,
        photoDetails: action.payload,
        isLoading: false,
      };
    case GET_INITIAL_PHOTOS_ERROR:
    case GET_PHOTOS_ERROR:
    case GET_PHOTO_DETAILS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
