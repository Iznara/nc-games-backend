const express = require('express');
const apiRouter = require('./routers/api.router');
const { handle404Errors, handleCustomErrors, handlePsqlErrors, handleServerErrors } = require("./errors/errorHandling");

const app = express();
app.use(express.json());

app.use('/api', apiRouter);

app.use(handle404Errors);
app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleServerErrors);

module.exports = app;
