const Repair = require('../models/repairs.model');

const getAllRepairs = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  if (!repairs) {
    return res.status(404).json({
      status: 'error',
      message: 'Repairs was no found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'All reapairs has been found',
    results: repairs.length,
    repairs,
  });
};

const createNewRepair = async (req, res) => {
  const { date, userId } = req.body;

  const repair = await Repair.create({
    date,
    userId,
  });

  res.status(200).json({
    status: 'success',
    message: 'The new repair has been created',
    repair,
  });
};

const findOneRepair = async (req, res) => {
  const { repair } = req;

  res.status(200).json({
    status: 'success',
    message: 'The repair has been found',
    repair,
  });
};

const updateRepair = async (req, res) => {
  const { status } = req.body;
  const { repair } = req;

  await repair.update({
    status,
  });

  res.status(200).json({
    status: 'success',
    message: 'The product has been update',
    repair,
  });
};

const deleteRepair = async (req, res) => {
  const { repair } = req;

  await repair.update({
    status: 'cancelled',
  });

  res.status(200).json({
    status: 'success',
    message: 'The repair has been cancelled',
    repair,
  });
};

module.exports = {
  getAllRepairs,
  createNewRepair,
  findOneRepair,
  updateRepair,
  deleteRepair,
};
