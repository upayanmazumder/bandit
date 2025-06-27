import mongoose, { Document, Schema } from "mongoose";
import { IUser, IOAuth } from "../types/user.types";

const oauthSchema = new Schema<IOAuth>(
  {
    googleId: { type: String },
    githubId: { type: String },
  },
  { _id: false }
);

const userSchema = new Schema<IUser & Document>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    oauth: { type: oauthSchema, default: {} },
    username: { type: String },
    profilePicture: { type: String },
    name: { type: String },
    githubInstallationId: { type: [String], default: [] },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
