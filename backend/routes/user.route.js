import express from "express";
import { registerUser } from "../controller/user.controller.js";
import {
  loginUser,
  logoutUser,
  getAllUsers,
} from "../controller/user.controller.js";
import { secureRoute } from "../middleware/secureRoute.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getAllUsers", secureRoute, getAllUsers);

export default router;
