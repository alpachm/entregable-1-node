const express = require('express');
const {
  getAllRepairs,
  createNewRepair,
  deleteRepair,
  findOneRepair,
  updateRepair,
} = require('../controllers/repairs.controllers');
const { validRepairExist } = require('../middleware/repairs.middleware');

const router = express.Router();

router.route('/').get(getAllRepairs).post(createNewRepair);

router
  .route('/:id')
  .get(validRepairExist, findOneRepair)
  .patch(validRepairExist, updateRepair)
  .delete(validRepairExist, deleteRepair);

module.exports = router;
