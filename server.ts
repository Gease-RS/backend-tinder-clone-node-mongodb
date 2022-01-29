import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

dotenv.config();

const moongose_url =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fc39i.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority` ||
  "mongodb://localhost:27017/";

mongoose.connect(moongose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

const app = express();
const port = process.env.PORT || 3333;

app.use(router);
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
