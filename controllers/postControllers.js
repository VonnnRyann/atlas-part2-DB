import { PostsMessage } from "../model/postsMessage.js";

export const getPost = async (req, res) => {
  try {
    const result = await PostsMessage.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = new PostsMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    if (!mongoose) {
    }
    await PostsMessage.findByIdAndRemove(req.params.id);
    res.status(201).json({ msg: "File deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await PostsMessage.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
