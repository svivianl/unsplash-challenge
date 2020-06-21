"use strict";
const axios = require("axios");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const accesskey = process.env.UNSPLASH_ACCESS_KEY;

const apiUrl = (path) => {
  return `https://api.unsplash.com${path}`;
};

const getPhoto = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl(url))
      .then((response) => {
        if (
          (response.status === 200 && !response) ||
          (response && response.data.total === 0)
        ) {
          resolve("Image detail found");
        }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getPhotoDetails: (req, res) => {
    const { photoId } = req.params;
    getPhoto(`/photos/${photoId}/?client_id=${accesskey}`)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(400).json(error));
  },

  getPhotos: (req, res) => {
    const { page, query, count, orientation } = req.query;
    const path = query
      ? `/search/photos?page=${page}&query=${query}&client_id=${accesskey}`
      : `/photos/random?page=${page}&client_id=${accesskey}&count=${count}`;
    const url = orientation ? `${path}&orientation=${orientation}` : path;
    getPhoto(url)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(400).json(error));
  },
};
