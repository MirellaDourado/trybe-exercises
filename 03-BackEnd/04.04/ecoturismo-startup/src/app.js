const express = require('express');
const app = express();
const activitiesRouter = require('./router/activitiesRouter');

app.use(express.json());

app.use('/', activitiesRouter);

module.exports = app;
