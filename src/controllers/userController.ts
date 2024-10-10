import  { NextFunction, Request, Response } from "express";
import  { IUser } from "../models/userModel";
import { register, getAllUsers, getOneUser, deleteOneUser, editOneUser } from "../services/userService";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const  user: IUser = req.body;
        const createUser: IUser = await register(user);
        res.status(201).json(createUser);
      } catch (error) {
        next(error);
      }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const users: IUser[] | null = await getAllUsers();
        res.status(201).json({ users });
    } catch (error) {
        next(error);
    }
};
export const getUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const username: string = req.params.username;
        const user: IUser | null = await getOneUser(username);
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const user: string | null = await deleteOneUser(id);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};


export const editUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const userToUpdate: IUser = req.body;
        const user = await editOneUser(id, userToUpdate);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};