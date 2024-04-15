import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";

import User from "./models/user.model.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 7000;
const JWTSECRET = process.env.JWTSECRET;

mongoose
  .connect("mongodb://localhost:27017/agaupolis")
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log("Server Started on port: " + PORT);
    });
  })
  .catch((err) => console.log(err));

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    Username: req.body.username,
    Password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username: user.Username,
      },
      JWTSECRET
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});
