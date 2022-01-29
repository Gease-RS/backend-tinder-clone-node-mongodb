import { model, Schema, Document } from "mongoose";

export interface ICard extends Document {
  name: String;
  url: string;
}

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Card = model<ICard>("Card", schema);

export default Card;
