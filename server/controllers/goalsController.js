const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

/**
 * @desc    Get Goals
 * @route   GET /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await Goal.find();

  res.status(200).send({
    message: "We got goals, Bruh!",
    goals,
  })
})

/**
 * @desc    Set Goal
 * @route   POST /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const setGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400)

    // Below is the err.message in the errorHandler middleware in ./middleware/errorMiddleware.js
    throw new Error('Please, enter a text field');
  }

  const goal = await Goal.create({
    text: req.body.text
  })

  res.status(200).send({
    message: "Setting the goals, Bruh!",
    goal
  })
})

/**
 * @desc    Update Goal
 * @route   PUT /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const updateGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found');
  }

  /**
   * first param :  on the basis of (condition)
   * second param:  the updations (body)
   * third param :  if not exist then pass "new" as true
   * fourth param:  A callback function (refer docs)
   */
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).send({
    message: `Updating the goal ${req.params.id}, Bruh!`,
    updatedGoal
  })
})

/**
 * @desc    Delete Goal
 * @route   DELETE /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const deleteGoal = asyncHandler(async (req, res, next) => {
  if(req.params.id.length > 24 || req.params.id.length < 24) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} should be 24 characters long only`);
  }

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} doesn't exist`);
  }
  // One Way
  // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

  // res.status(200).send({
  //   message: `Done the goal ${req.params.id}, Bruh!`,
  //   deletedGoal
  // })

  // second way (the tutorial way)
  await goal.remove()

  res.status(200).send({
    res: `Goal deleted at ${req.params.id}`
  })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}