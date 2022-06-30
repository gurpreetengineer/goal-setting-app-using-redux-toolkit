/**
 * @desc    Get Goals
 * @route   /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const getGoals = (req, res, next) => {
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
}

/**
 * @desc    Set Goals
 * @route   /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const setGoals = (req, res, next) => {
  res.status(200).send({
    message: "Setting the goals, Bruh!"
  })
}

/**
 * @desc    Update Goal
 * @route   /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const updateGoal = (req, res, next) => {
  res.status(200).send({
    message: `Updating the goal ${req.params.id}, Bruh!`
  })
}

/**
 * @desc    Delete Goal
 * @route   /api/goals/:id
 * @access  Private  
 * @params  req, res, next 
 */
const deleteGoal = (req, res, next) => {
  res.status(200).send({
    message: `Done the goal ${req.params.id}, Bruh!`
  })
}

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}