import { IComment, IPost } from "../models/postModel.js";
import { IUser } from "../models/userModel.js";
import  User  from "../models/userModel.js";
import  Post  from "../models/postModel.js";


export const createUser = async (user: IUser): Promise<IUser> => {
        const userCreated: IUser = await User.create(user);  
        return userCreated;
};

export const findUserByUsername = async (username: string): Promise<IUser | null> => {
        const user: IUser | null = await User.findOneAndUpdate({ username: username });  
        return user;
}


export const getUsers = async (): Promise<IUser[] | null> => {
        const users: IUser[] | null = await User.find();  
        return users;
};

export const deleteUser = async (id: string): Promise<string | null> => {
        const userDeleted: IUser | null = await User.findByIdAndDelete({ _id: id });  
        if (userDeleted) {
                return `User deleted successfully!`;
        } else {
                return null;
        }
};

export const editUser = async (id: string, user: IUser): Promise<IUser | null> => {
        const userUpdated: IUser | null = await User.findByIdAndUpdate({ _id: id }, user);  
        return userUpdated;
};


export const findUserById = async (id: string): Promise<IUser | null> => {
  const user: IUser | null = await User.findById({ _id: id });  
  return user;
};

// ##################



export const createPost = async (post: IPost): Promise<IPost | null> => {
  const userToAddPost: IUser | null = await User.findOne({_id: post.author});
  if(!userToAddPost){
    return null;    
  }
  userToAddPost.posts.push(post._id);
  userToAddPost.save();
  const postCreated: IPost | null = await Post.create(post);
  if(!postCreated){
    return null;    
  }
  return postCreated;
};


export const deletePost = async (id: string): Promise<string | null> => {
        const postDeleted: IPost | null = await Post.findByIdAndDelete({ _id: id });  
        if (postDeleted) {
                return `User deleted successfully!`;
        } else {
                return null;
        }
}


export const getPosts = async (): Promise<IPost[] | null> => {
        const posts: IPost[] | null = await Post.find();  
        return posts;
};

export const getPostsOfTheUser = async (id: string): Promise<IPost[] | null> => {
  const posts: IPost[] | null = await Post.find({ author: id }).populate({path: "author",
        select: "username email profile",
       }).populate({
        path: "comments.author",
        select: "username",});  
  return posts;
};

export const updatePost = async (id: string, post: IPost): Promise<IPost | null> => {
  const posToUpdate: IPost | null = await Post.findByIdAndUpdate({ _id: id }, post);  
  return posToUpdate;
};


export const addComment = async (id: string, comment: IComment): Promise<IComment | null> => {
  const userCreated: IComment | null = await Post.findByIdAndUpdate({ _id: id }, comment);  
  return userCreated;
};



 

 
        
