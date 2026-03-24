import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, default: "全栈开发者" },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "👨‍💻" },
  email: { type: String, default: "" },
  github: { type: String, default: "" },
  twitter: { type: String, default: "" },
  juejin: { type: String, default: "" },
  skills: [{ type: String }],
  socialLinks: { type: Map, of: String },
  updatedAt: { type: Date, default: Date.now },
});

export const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
