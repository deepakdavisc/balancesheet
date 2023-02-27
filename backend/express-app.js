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

  // Serve frontend
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) =>
      res.sendFile(
        path.resolve(__dirname, "../", "frontend", "build", "index.html")
      )
    );
  } else {
    app.get("/", (req, res) => res.send("Please set to production"));
  }
};
