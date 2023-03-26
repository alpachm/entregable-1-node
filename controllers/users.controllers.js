const User = require('../models/users.model');

const getAllUsers = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });

  if (!users) {
    return res.status(404).json({
      status: 'error',
      message: 'The users was not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'All users were found',
    results: users.length,
    users,
  });
};

const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'The new user has been created',
  });
};

const findOneUser = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: 'success',
    message: 'The user has been found',
    user,
  });
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const { user } = req;

  await user.update({
    name,
    email,
  });

  res.status(200).json({
    status: 'success',
    message: 'The user has been update',
  });
};

const deleteUser = async (req, res) => {
  const { user } = req;

  await user.update({
    status: 'disabled',
  });

  res.status(200).json({
    status: 'success',
    message: 'The user has been disabled',
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  findOneUser,
  updateUser,
  deleteUser,
};
