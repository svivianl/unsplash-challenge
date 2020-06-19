const express = require("express");
const cors = require("cors");
// const favicon = require("express-favicon");
const path = require("path");
const axios = require("axios");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();

// app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());

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

app.get("/photos/:photoId", (req, res) => {
  const { photoId } = req.params;
  getPhoto(`/photos/${photoId}/?client_id=${accesskey}`)
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(400).json(error));
});

app.get("/photos", (req, res) => {
  const { page, query, count, orientation } = req.query;
  const path = query
    ? `/search/photos?page=${page}&query=${query}&client_id=${accesskey}`
    : `/photos/random?page=${page}&client_id=${accesskey}&count=${count}`;
  const url = orientation ? `${path}&orientation=${orientation}` : path;
  getPhoto(url)
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(400).json(error));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
