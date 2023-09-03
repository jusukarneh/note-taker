const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./notes');
const feedbackRouter = require('./feedback');
const diagnosticRouter =require('./diagnostics');

const app = express();

app.use('/tips', tipsRouter);
app.use('/tips', feedbackRouter);
app.use('/tips', diagnosticRouter);


module.exports =app;