
import express from "express";
import signup from "../controllers/authController.js";
import Login from "../controllers/LoginController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import Profile from "../controllers/ProfileController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/Login", Login);
router.get("/Profile", authMiddleware,Profile);
export default router;
