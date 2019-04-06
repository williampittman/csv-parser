const express = require("express");
const app = express();
const csv = require("csvtojson");
const mkdirp = require("mkdirp");

const parseFile = () => {
  csv()
    .fromFile("YOUR FILE")
    .then(jsonObj => {
      console.log("parsed");
      jsonObj.map(index => {
        mkdirp(`PATH_TO_DESTINATION/YOUR_COLUMN}`, err => {
          if (err) console.log(error);
          console.log("files created");
        });
      });
    });
};

const PORT = 5000 || process.env.PORT;

app.listen(`${PORT}`, () => {
  console.log("starting");
  parseFile();
});
