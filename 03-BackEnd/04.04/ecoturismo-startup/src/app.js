const express = require('express');
const app = express();
const activitiesRouter = require('./router/activitiesRouter');
const signupRouter = require('./router/signupRouter');

app.use(express.json());

app.use('/', activitiesRouter);

app.use('/', signupRouter);

module.exports = app;
