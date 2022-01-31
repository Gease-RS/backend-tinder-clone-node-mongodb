import mongoose, { Schema } from "mongoose";
import IPeople from "../interfaces/IPeople";

const peopleSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPeople>("People", peopleSchema);
