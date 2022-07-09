const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { env } = process;

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      /**
       * if you check on jwt.io, by putting token in input field
       * you'll see that it return ID, initial date and expiry
       */
      const decoded = jwt.verify(token, env.JWT_SECRET)

      // We don't want hashed password in the payload
      req.user = await User.findById(decoded.id).select('-password');

      //to call the next middleware 
      next();

    } catch (error) {
      console.log('Error', error);

      res.status(401);
      throw new Error('Not Authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }

})

module.exports = {
  protect
}