import { IUser } from "../models/userModel.js";
import { createUser, findUserByUsername, getUsers, deleteUser, editUser  } from "../DAL/data.js";



export const register = async (user: IUser): Promise<IUser> => {
  const userCreated: IUser = await createUser(user);  
  return userCreated;
};

export const getOneUser = async (id: string): Promise<IUser | null> => {
  const user: IUser | null = await findUserByUsername(id);  
  return user;
};

export const getAllUsers = async (): Promise<IUser[] | null> => {
  const users: IUser[] | null = await getUsers();  
  return users;
};

export const deleteOneUser = async (id: string): Promise<string | null> => {
  const userDeleted: string | null = await deleteUser(id);
  return userDeleted;
  
};

export const editOneUser = async (id: string, user: IUser): Promise<IUser | null> => {
  const userToUpdate: IUser | null= await editUser(id, user);  
  return userToUpdate;
};
