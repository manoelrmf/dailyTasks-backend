const express = require('express')

const UsuarioController = require('./controllers/UsuarioController.js')

const routes = express.Router()

routes.get('/usuario/:id', UsuarioController.find)
routes.get('/usuario', UsuarioController.findAll)
routes.put('/usuario', UsuarioController.update)
routes.delete('/usuario/:id', UsuarioController.find)


module.exports = routes