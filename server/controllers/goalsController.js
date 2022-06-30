const asyncHandler = require('express-async-handler')

/**
 * @desc    Get Goals
 * @route   GET /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const getGoals = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    // res.status(400)

    // Below is the err.message in the errorHandler middleware in ./middleware/errorMiddleware.js
    throw new Error('Please enter a text field')
  }
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
})

/**
 * @desc    Set Goal
 * @route   POST /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const setGoal = asyncHandler(async (req, res, next) => {
  res.status(200).send({
    message: "Setting the goals, Bruh!"
  })
})

/**
 * @desc    Update Goal
 * @route   PUT /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const updateGoal = asyncHandler(async (req, res, next) => {
  res.status(200).send({
    message: `Updating the goal ${req.params.id}, Bruh!`
  })
})

/**
 * @desc    Delete Goal
 * @route   DELETE /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const deleteGoal = asyncHandler(async (req, res, next) => {
  res.status(200).send({
    message: `Done the goal ${req.params.id}, Bruh!`
  })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}