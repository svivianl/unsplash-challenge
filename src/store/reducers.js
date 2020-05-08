import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from "./types";

const initialStateSearch = {
  isLoading: false,
  photos: [],
  error: "",
  total: 0,
  totalPages: 0,
};

export const upslashReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        isPending: true,
        photos: [],
        error: "",
        total: 0,
        totalPages: 0,
      };
    case GET_PHOTOS_SUCCESS:
      const { results, total, total_pages } = action.payload;
      return {
        ...state,
        photos: results,
        total,
        totalPages: total_pages,
        isPending: false,
      };
    case GET_PHOTOS_ERROR:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
