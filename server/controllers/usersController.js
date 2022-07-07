const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

/**
 * @desc    Register User
 * @route   POST /api/users/register
 * @access  Public
 * @params  req, res
 */
 const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Field(s) are empty');
  }

  // Check if user already exists in the database, remember (here) await is very important.
  // Without it a circular object will be returned which will always implies as a true value.
  const userExists = await User.findOne({ email });
  console.log(userExists)
  if (userExists) {
    res.status(400)
    throw new Error(`User already exists ${userExists}`)
  }

  // Hashing of the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // User creation with hashed password
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      msg: 'User created',
      _id: user.id,
      name: user.name,
      email: user.email,
      password: hashedPassword,
    })
  } else {
    res.status(400);
    throw new Error('Invalid user. Please check and try again');
  }
})

/**
 * @desc    Login User
 * @route   POST /api/users/login
 * @access  Public
 * @params  req, res
 */
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      msg: "Login successful",
      _id: user.id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400)
    throw new Error('Invalid Credentials');
  }
})

/**
 * @desc    Fetch User information
 * @route   GET /api/users/me
 * @access  Public
 * @params  req, res
 */
const getMe = asyncHandler(async (req, res) => {
  res.status(200).send({
    msg: 'Here\'s the user\'s information.'
  })
})

module.exports = {
  loginUser,
  registerUser,
  getMe
}