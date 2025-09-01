import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import nodemailer from "nodemailer";
import crypto from "crypto";

const otpStore: Record<string, string> = {}; // In-memory (better: Redis/DB)

export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email required" });

    // Generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore[email] = otp;

    // Configure nodemailer (for demo using Ethereal)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or any SMTP
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"QuickNotes" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending OTP" });
  }
};

// ✅ Verify OTP & Signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, dob, email, otp } = req.body;

    if (!otpStore[email] || otpStore[email] !== otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = await User.create({ name, email, dob });

    delete otpStore[email]; // clear OTP after use

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};

// ✅ Login with OTP
export const login = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    if (!otpStore[email] || otpStore[email] !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    delete otpStore[email]; // clear OTP

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
