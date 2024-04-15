import mongoose from "mongoose";
const { Schema } = mongoose;

const UserModel = new mongoose.Schema(
  {
    Username: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Admin: { type: Boolean, required: true },
  },
  {
    collection: "users",
  }
);

const model = mongoose.model("UserData", UserModel);

export default model;
