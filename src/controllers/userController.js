import { User } from "../infrastructure/models/user.js"; 

export const getUser = async (req, res) => {
  const { id } = req.body;
  const user = await User.findByPk(id);
  res.json(user);
}

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
}

export const getAllUsers = async (_, res) => {
  const users = await User.findAll();
  res.json(users);
}

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  const user = await User.findByPk(id);
  await user.destroy();
  res.json(user);
}