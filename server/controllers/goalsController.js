/**
 * @desc    Get Goals
 * @route   GET /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const getGoals = (req, res, next) => {
  console.log('req.body', req.body);
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
}

/**
 * @desc    Set Goal
 * @route   POST /api/goals
 * @access  Private  
 * @params  req, res, next 
 */
const setGoal = (req, res, next) => {
  res.status(200).send({
    message: "Setting the goals, Bruh!"
  })
}

/**
 * @desc    Update Goal
 * @route   PUT /api/goals/:id
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
 * @route   DELETE /api/goals/:id
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
  setGoal,
  updateGoal,
  deleteGoal
}