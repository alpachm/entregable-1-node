const Repair = require('../models/repairs.model');

const validRepairExist = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `The repair with id ${id} was not found`,
    });
  }

  req.repair = repair;

  next();
};

module.exports = {
  validRepairExist,
};
