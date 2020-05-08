import axios from "axios";

const accesskey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const apiUrl = (path) => {
  return `https://api.unsplash.com${path}`;
};

export const getPhotos = async (query, page, orientation) => {
  const url = orientation
    ? `/search/photos?page=${page}&query=${query}&client_id=${accesskey}&orientation=${orientation}`
    : `/search/photos?page=${page}&query=${query}&client_id=${accesskey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl(url))
      .then((response) => {
        if (
          (response.status === 200 && !response) ||
          (response && response.data.total === 0)
        ) {
          return reject("No images found");
        }

        return resolve(response.data);
      })
      .catch((error) => reject("Bad request"));
  });
};

export const getPhotoDetails = async (photoId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl(`/photos/${photoId}/?client_id=${accesskey}`))
      .then((response) => {
        if (
          (response.status === 200 && !response) ||
          (response && response.data.total === 0)
        ) {
          return reject("Image detail found");
        }

        return resolve(response.data);
      })
      .catch((error) => reject("Bad request"));
  });
};
