import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const moongose_url =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fc39i.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority` ||
  "mongodb://localhost:27017/";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
};

const config = {
  moongose_url,
  options,
};

export default config;
