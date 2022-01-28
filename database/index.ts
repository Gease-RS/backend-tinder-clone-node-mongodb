import { connect } from "mongoose";

run().catch((err) => console.log(err));

const moongose_url = process.env.MONGODB_URI || "mongodb://localhost:27017/";

async function run(): Promise<void> {
  await connect(moongose_url);
  console.log("Connected to MongoDB");
}
