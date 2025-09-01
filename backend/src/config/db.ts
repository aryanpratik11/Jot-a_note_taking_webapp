import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
