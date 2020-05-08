import axios from "axios";

export const apiUrl = (query) => {
  return `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
};

export const getPhotos = async (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl(query))
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
