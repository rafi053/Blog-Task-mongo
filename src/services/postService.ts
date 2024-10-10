import { IComment, IPost } from "../models/postModel.js";
import { createPost, deletePost, getPosts, getPostsOfTheUser, updatePost, addComment} from "../DAL/data.js";


export const createOnePost = async (post: IPost): Promise<IPost> => {
  const postCreated: IPost = await createPost(post);  
  return postCreated;
};

export const deleteOnePost = async (id: string): Promise<string | null> => {
  const user: string | null = await deletePost(id);  
  return user;
};

export const getAllPosts = async (): Promise<IPost[] | null> => {
  const posts: IPost[] | null = await getPosts();  
  return posts;
};

export const getOnePosts = async (id: string): Promise<IPost[] | null> => {
  const posts: IPost[] | null = await getPostsOfTheUser(id);  
  return posts;
};

export const updateOnePost = async (id: string, post: IPost): Promise<IPost | null> => {
  const userToUpdate: IPost | null= await updatePost(id, post);  
  return userToUpdate;
};

export const addOneComment = async (id: string, comment: IComment): Promise<IComment | null> => {
  const userCreated: IComment | null = await addComment(id, comment);  
  return userCreated;
};
