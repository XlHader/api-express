import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/get", getUser);
userRouter.post("/create", createUser);
userRouter.post("/get-all", getAllUsers);
userRouter.post("/delete", deleteUser);