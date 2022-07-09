const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

/**
 * @desc    Get Goals
 * @route   GET /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const getGoals = asyncHandler(async (req, res, next) => {
  // we are able to access req.user.id because of "protect" middleware
  const goals = await Goal.find({ user: req.user.id });

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
    text: req.body.text,
    user: req.user.id,
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
  const user = await User.findById(req.user.id);

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found');
  }

  // Check if user exists or not (req.user.id) is getting value from "protect" middleware
  if (!user) {
    res.status(401);
    throw new Error('Unauthorized User or user not found');
  }

  // This will stop the attempt of accessing the goals of different users, while UPDATION
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
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
  const user = await User.findById(req.user.id)

  if (req.params.id.length > 24 || req.params.id.length < 24) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} should be 24 characters long only`);
  }

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} doesn't exist`);
  }
  
  // Check if user exists or not (req.user.id) is getting value from "protect" middleware
  if (!user) {
    res.status(401);
    throw new Error('Unauthorized User or user not found');
  }

  // This will stop the attempt of accessing the goals of different users, while UPDATION
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
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