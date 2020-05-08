import { createSelector } from "reselect";

export const getState = (state) => state.upslashState;

export const getPhotos = createSelector(
  getState,
  (state) => state?.photos || []
);

export const getIsLoading = createSelector(
  getState,
  (state) => state?.isLoading || false
);

export const getTotal = createSelector(getState, (state) => state?.total || 0);

export const getTotalPages = createSelector(
  getState,
  (state) => state?.totalPages || 0
);

export const getError = createSelector(getState, (state) => state?.error || "");
