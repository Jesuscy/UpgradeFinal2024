const express = require('express')
const authRouter = express.Router()
const {getUserById, getUser,getUsers, logUser, createUser, deleteUser, logoutUser, userIsAuth} = require('../controllers/user.controller')


//Obtener Usuarios.
authRouter.get("/userId", getUserById)
authRouter.get("/user", getUser)
authRouter.get("/users", getUsers)
authRouter.post("/verify", userIsAuth)
authRouter.post("/log", logUser)
authRouter.post("/create", createUser)
authRouter.post("/delete", deleteUser)
authRouter.post('/userIsAuth', userIsAuth);

module.exports = authRouter