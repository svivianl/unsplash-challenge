"use strict";

const express = require("express");
const router = express.Router();
const helpers = require("./helpers");

module.exports = () => {
  router.route("/:photoId").get(helpers.getPhotoDetails);
  router.route("/").get(helpers.getPhotos);
  return router;
};
