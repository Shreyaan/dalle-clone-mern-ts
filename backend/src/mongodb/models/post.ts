import mongoose from "mongoose";

const Post = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;