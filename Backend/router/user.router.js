const express = require('express')
const authRouter = express.Router()
const {getUser,getUsers} = require('../controllers/user.controller')

//Obtener Usuarios.
authRouter.get("/user", getUser)
authRouter.get("/users", getUsers)

module.exports = authRouter