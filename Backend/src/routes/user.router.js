const express = require('express')
const authRouter = express.Router()
const {getUser,getUsers, logUser, createUser, deleteUser} = require('../controllers/user.controller')


//Obtener Usuarios.
authRouter.get("/user", getUser)
authRouter.get("/users", getUsers)
authRouter.post("/log", logUser)
authRouter.post("/create", createUser)
authRouter.post("/delete", deleteUser)


module.exports = authRouter