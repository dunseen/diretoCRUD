const express = require('express');

const UserController = require('./controller/UserController');
const StudentController = require('./controller/StudentController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);

routes.get('/students', StudentController.index);
routes.post('/students' , StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

module.exports = routes;