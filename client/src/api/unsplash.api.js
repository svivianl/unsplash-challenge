import axios from "axios";

const parseError = (parameters) => {
  const messages = parameters.messages;
  // error
  if (messages) {
    if (messages instanceof Array) {
      return messages;
    }
    return messages;
  }
  return parameters;
};

const getError = (error) => {
  if (error.response) {
    // Request made and server responded
    return parseError(error.response.data);
  }

  if (error.request) {
    // The request was made but no response was received
    return "Server is down. Please contact the admin.";
  }

  // Something happened in setting up the request that triggered an Error
  return error;
};

export const getPhotos = async (query, page, orientation) => {
  const path = query
    ? `/api/photos?page=${page}&query=${query}`
    : `/api/photos?page=${page}&count=10`;
  const url = orientation ? `${path}&orientation=${orientation}` : path;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (
          (response.status === 200 && !response) ||
          (response && response.data.total === 0)
        ) {
          return reject("No images found");
        }

        return resolve(response.data);
      })
      .catch((error) => reject(getError(error)));
  });
};

export const getPhotoDetails = async (photoId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/photos/${photoId}`)
      .then((response) => {
        if (
          (response.status === 200 && !response) ||
          (response && response.data.total === 0)
        ) {
          return reject("Image detail found");
        }

        return resolve(response.data);
      })
      .catch((error) => reject(getError(error)));
  });
};
