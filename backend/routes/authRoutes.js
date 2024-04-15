import express from "express";
import cors from "cors";

// imports all functions under the name c
import * as c from "../controllers/authControllers.js";

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
router.post("/api/register", c.registerUser);
router.post("/api/login", c.loginUser);

// GET endpoints
router.get("/", c.test);
router.get("/api/userData", c.userData);

//exports routes
export default router;
