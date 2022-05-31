import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router
  .get("/", getPost)
  .post("/", createPost)
  .delete("/:id", deletePost)
  .patch("/:id", updatePost);

export default router;
