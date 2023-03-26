const express = require('express');
const {
  getAllUsers,
  createNewUser,
  findOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');
const { validUserExist } = require('../middleware/users.middleware');

const router = express.Router();

router.route('/').get(getAllUsers).post(createNewUser);

router
  .route('/:id')
  .get(validUserExist, findOneUser)
  .patch(validUserExist, updateUser)
  .delete(validUserExist, deleteUser);

module.exports = router;
