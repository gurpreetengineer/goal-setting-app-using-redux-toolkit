
/**
 * @desc    Login User
 * @route   POST /api/users/login
 * @access  Public
 * @params  req, res
 */
const loginUser = (req, res) => {
  res.status(200).send({
    msg: 'Provide me the login users info'
  })
}

/**
 * @desc    Register User
 * @route   POST /api/users/register
 * @access  Public
 * @params  req, res
 */
const registerUser = (req, res) => {
  res.status(200).send({
    msg: 'Please register the user'
  })
}

/**
 * @desc    Fetch User information
 * @route   GET /api/users/me
 * @access  Public
 * @params  req, res
 */
const getMe = (req, res) => {
  res.status(200).send({
    msg: 'Here\'s the user\'s information.'
  })
}

module.exports = {
  loginUser,
  registerUser,
  getMe
}