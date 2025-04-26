import express, { response } from "express";
import mongoose from "mongoose";
import { mongoDBURL, PORT } from "./config/db.js";
const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Testing");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected To DataBase");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
