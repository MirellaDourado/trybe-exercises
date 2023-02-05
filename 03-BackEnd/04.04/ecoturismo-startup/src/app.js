const express = require('express');
const app = express();
const activitiesRouter = require('./routes/activities');

app.use(express.json());

app.use('/', activitiesRouter);

module.exports = app;
