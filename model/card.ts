import mongoose, { Schema } from "mongoose";
import ICard from "../interfaces/ICard";

const cardSchema: Schema = new Schema(
  {
    cardname: { type: String, required: true },
    urlavatar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICard>("Card", cardSchema);
