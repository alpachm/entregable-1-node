const User = require('../models/users.model');

const validUserExist = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `The user with id ${id} was not found`,
    });
  }

  req.user = user;

  next();
};

module.exports = {
  validUserExist,
};
