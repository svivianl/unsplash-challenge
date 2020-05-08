import { cloneDeep } from "lodash";
import {
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
  query: "",
  page: 1,
  photoDetails: {},
};

export const upslashReducer = (state = initialStateSearch, action = {}) => {
  const photosCloned = cloneDeep(state.photos);

  switch (action.type) {
    case GET_PHOTOS:
      const { query, page } = action.payload;

      return {
        ...state,
        isLoading: true,
        photos: query === state.query ? photosCloned : [],
        error: "",
        total: query === state.query ? state.total : 0,
        totalPages: query === state.query ? state.totalPages : 0,
        page: query === state.query ? page : 1,
        query,
      };
    case GET_PHOTO_DETAILS:
      return {
        ...state,
        isLoading: true,
        photoDetails: {},
      };
    case GET_PHOTOS_SUCCESS:
      const { results, total, total_pages } = action.payload;
      return {
        ...state,
        photos: [...photosCloned, ...results],
        total,
        totalPages: total_pages,
        isLoading: false,
      };
    case GET_PHOTO_DETAILS_SUCCESS:
      return {
        ...state,
        photoDetails: action.payload,
        isLoading: false,
      };
    case GET_PHOTOS_ERROR:
    case GET_PHOTO_DETAILS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
