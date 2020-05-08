import { cloneDeep } from "lodash";
import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from "./types";

const initialStateSearch = {
  isLoading: false,
  photos: [],
  error: "",
  total: 0,
  totalPages: 0,
  query: "",
  page: 1,
};

export const upslashReducer = (state = initialStateSearch, action = {}) => {
  const photosCloned = cloneDeep(state.photos);

  switch (action.type) {
    case GET_PHOTOS:
      const { query, page } = action.payload;

      return {
        ...state,
        isPending: true,
        photos: query === state.query ? photosCloned : [],
        error: "",
        total: query === state.query ? state.total : 0,
        totalPages: query === state.query ? state.totalPages : 0,
        page: query === state.query ? page : 1,
        query,
      };
    case GET_PHOTOS_SUCCESS:
      const { results, total, total_pages } = action.payload;
      return {
        ...state,
        photos: [...photosCloned, ...results],
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
