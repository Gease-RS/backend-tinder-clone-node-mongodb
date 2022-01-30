import { Document } from "mongoose";

export default interface ICard extends Document {
  name: string;
  url: string;
}
