import axios from "axios";

export const apiUrl = (query, page = 1) => {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&count=10`;
};

export const getPhotos = async (query, page) => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl(query, page))
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
