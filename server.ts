import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";
import config from "./config";

mongoose.connect(config.moongose_url, config.options);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3333", "http://localhost:3000"],
    credentials: false,
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
