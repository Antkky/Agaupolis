import express from "express";
import cors from "cors";

// imports all functions under the name c
import * as auth from "../controllers/authControllers.js";
import * as user from "../controllers/userController.js";

// define router
const router = express.Router();

// Use cors aka middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173", // client server
    })
);

// POST endpoints
router.post("/api/register", auth.registerUser);
router.post("/api/login", auth.loginUser);

// GET endpoints
router.get("/", auth.test);
router.get("/api/userData", user.userData);

//exports routes
export default router;
