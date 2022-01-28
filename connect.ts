import { Mongoose } from "mongoose";

const cardSchema = new Mongoose.Schema({
  name: String,
  url: String,
});

export default Mongoose.model("cards", cardSchema);
