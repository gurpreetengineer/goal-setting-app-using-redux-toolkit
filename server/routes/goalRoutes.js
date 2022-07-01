const express = require('express');
const router = express.Router();
const { 
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal 
} = require('../controllers/goalsController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(getGoals).delete(deleteGoal)

module.exports = router