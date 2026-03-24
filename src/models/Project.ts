import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  stars: { type: Number, default: 0 },
  icon: { type: String, default: "🚀" },
  link: { type: String, default: "#" },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
