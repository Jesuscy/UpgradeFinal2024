const express = require('express')
const authRouter = express.Router()
const {getUserById,getUser,getUsers, logUser, createUser, deleteUser, logoutUser} = require('../controllers/user.controller')


//Obtener Usuarios.
authRouter.get("/userId", getUserById)
authRouter.get("/user", getUser)
authRouter.get("/users", getUsers)
authRouter.post("/log", logUser)
authRouter.post("/logout", logoutUser)
authRouter.post("/create", createUser)
authRouter.post("/delete", deleteUser)


module.exports = authRouter