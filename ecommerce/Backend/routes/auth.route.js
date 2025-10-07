import express from "express";
import { login, logOut, registration } from "../controller/auth.controller.js";

const router = express.Router();

// POST /signup - user registration
router.post("/signup", registration);
router.post("/signin", login);
router.get("/logout", logOut)

export default router;
