const express = require('express');
const router = express.Router();

router.get('/goals', (req, res, next) => {
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
})
router.post('/goals', (req, res, next) => {
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
})
router.put('/goals', (req, res, next) => {
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
})
router.delete('/goals', (req, res, next) => {
  res.status(200).send({
    message: "We got goals, Bruh!"
  })
})
module.exports = router