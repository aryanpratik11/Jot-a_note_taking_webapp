import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    dob?: string;
    email: string;
    googleId?: string;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        dob: { type: String },
        email: { type: String, required: true, unique: true },
        googleId: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);