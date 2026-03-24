import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  excerpt: { type: String, required: true },
  tags: [{ type: String }],
  readingTime: { type: String, default: "5 min" },
  content: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
