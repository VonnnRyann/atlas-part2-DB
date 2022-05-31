import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const PostsMessage = mongoose.model("PostMessage", postSchema);
