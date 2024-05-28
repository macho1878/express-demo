//import express into the files of code
import express from "express";

//initiate my app
const app = express();

app.listen("8080", function () {
  console.log("Server now running and listening on port 8080");
});
