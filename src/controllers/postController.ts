import { Request, Response, NextFunction } from "express";
import { IComment, IPost } from "../models/postModel";
import {createOnePost, deleteOnePost, getAllPosts, getOnePosts, updateOnePost, addOneComment } from "../services/postService.js";
import { comment } from "@ton/ton";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const post: IPost = req.body;
    const newPost: IPost = await createOnePost(post);
    res.json({ newPost });
  } catch (error) {
  next(error);
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const user: string | null = await deleteOnePost(id);
    if (!user) {
        res.status(404).json({ error: "User not found." });
        return;
    }
    res.status(200).json({ user });
} catch (error) {
    next(error);
}
};



// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const posts: IPost[] | null = await getAllPosts();
    if (!posts) {
        res.status(404).json({ error: "Posts not found." });
        return;
    }
    res.status(200).json({ posts });
} catch (error) {
    next(error);
}
};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const posts: IPost[] | null = await getOnePosts(id);
    if (!posts) {
        res.status(404).json({ error: "Posts not found." });
        return;
    }
    res.status(200).json({ posts });
} catch (error) {
    next(error);
}
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const updatePost: IPost = req.body;
    const post: IPost | null = await updateOnePost(id, updatePost);
    if (!post) {
        res.status(404).json({ error: "Posts not found." });
        return;
    }
    res.status(200).json({ post });
} catch (error) {
    next(error);
}
};


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const commentToAdd: IComment = req.body;
    const comment: IComment | null = await addOneComment(id, commentToAdd);
    if (!comment) {
        res.status(404).json({ error: "Posts not found." });
        return;
    }
    res.status(200).json({ comment });
} catch (error) {
    next(error);
}
};


