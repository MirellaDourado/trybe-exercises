const express = require('express');
const peopleRouter = require('./routes/peopleRoutes');
const app = express();

app.use(express.json());

app.use('/people', peopleRouter);

module.exports = app;