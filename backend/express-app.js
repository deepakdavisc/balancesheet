const express = require("express");
const cors = require("cors");
const { customer, loan } = require("./api");

module.exports = (app) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  customer(app);
  loan(app);
};
