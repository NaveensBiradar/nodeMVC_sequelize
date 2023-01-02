const express = require('express');
const api = express.Router();
const userController = require('../controllers/userController')

api.post('/create', userController.create);
api.get('/edit', userController.edit);
api.get('/all', userController.getallUser);
api.post('/delete', userController.delete);

module.exports = api;