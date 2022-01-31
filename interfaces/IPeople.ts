import { Document } from "mongoose";

export default interface IPeople extends Document {
  name: string;
  url: string;
}
