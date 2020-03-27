const express = require('express');
const routes = express.Router();

const ongcontroller = require('./controllers/OngController')
const incidentscontroller = require('./controllers/IncidentsController')
const profilecontroller = require('./controllers/ProfileController')
const sessioncontroller = require('./controllers/SessionController')


routes.get('/ongs', ongcontroller.index);
routes.get('/incidents', incidentscontroller.index);
routes.get('/profile', profilecontroller.index);

routes.post('/ongs', ongcontroller.create);
routes.post('/session', sessioncontroller.create);
routes.post('/incidents', incidentscontroller.create);

routes.delete('/incidents/:id', incidentscontroller.delete);


module.exports = routes;