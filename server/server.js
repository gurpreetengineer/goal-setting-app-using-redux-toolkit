const express = require('express');
const dotenv = require('dotenv').config();
const { env } = process

const PORT = env.PORT || 5000;

const app = express();

app.use('/api', require('./routes/goalRoutes'))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

