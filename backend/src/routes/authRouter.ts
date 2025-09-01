import express from "express";
import { sendOtp, signup, login } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/send-otp", sendOtp);
authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;
