const User = require('../models/user.model')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')

//Funciones Crud

const getUser = async (req, res, next) => {
    try {
        //Obtiene el usuario con el mail
        const mail = req.body
        const user = await User.findOne({ username: mail })
        if (user) {
            res.status(201).json({
                status: 201,
                message: HTTPSTATUSCODE[201],
                user: user
            })
        }

    }
    catch (error) {
        next(error)
    }

}

const getUsers = async (req, res, next) => {
    try {
        //Obtengo todos los users
        const users = await User.find()
        if (users) {
            res.status(200).json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                users: users
            })
        }
    }
    catch (error) {
        next(error)
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}