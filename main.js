
const { API_VERSION } = process.env;
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const UserController = require('./components/users/Controller')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post(`${API_VERSION}/users/new`, UserController.newUser);
app.get(`${API_VERSION}/users/get-by-id/:id`, UserController.getUserById);
app.post(`${API_VERSION}/users/follow/:id`, UserController.followUnFollowUser);


module.exports.handler = serverless(app);
