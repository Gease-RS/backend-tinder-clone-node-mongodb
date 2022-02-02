import * as dotenv from "dotenv";

dotenv.config();

const moongose_url =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fc39i.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority` ||
  "mongodb://localhost:27017/";
const options = {
  useNewUrlParser: true,
  userCreateIndex: true,
  useUnifiedTopology: true,
};

const config = {
  moongose_url,
  options,
};

export default config;
