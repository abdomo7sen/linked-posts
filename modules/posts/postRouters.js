import { Router } from "express";
import { addPost, deletePost, getAllPosts,getSinglePosts, getUserPosts, updatePost } from "./postController.js";

export const postRouter=Router()

postRouter.route("/").post(addPost).get(getAllPosts)
postRouter.route("/:id").delete(deletePost).get(getSinglePosts).put(updatePost)
postRouter.get("/me/:id",getUserPosts)

