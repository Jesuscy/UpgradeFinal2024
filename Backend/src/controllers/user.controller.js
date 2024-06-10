const User = require('../models/user.model')
const HTTPSTATUSCODE = require('../utils/httpStatusCode')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//Funciones Crud

const getUserById = async (req, res, next) => {
    try {
        //Obtiene el usuario con el mail
        const {userId} = req.body
        const user = await User.findById(userId)
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
const createUser = async (req, res, next) => {

    try {
        //Obtengo el mail y password.
        const { mail, password } = req.body

        //Compruebo que no hayan usuarios con es mail.
        const existingUser = await User.findOne({ username: mail })

        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "Mail already registered"
            })
        }
        const salt = await bcrypt.genSalt(10);
        //Hasheo la password que guardo de BD.
        const hassedPassword = await bcrypt.hash(password, salt)

        //Pass the salt value as an argument to bcrypt.hash()
        const user = new User({
            username: mail,
            password: hassedPassword, // Store the hashed password
            salt: salt, // Store the salt value

            meetings: []
        })
        await user.save()
        //Devuelvo el user creado
        res.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            user: user
        })

    }
    catch (error) {
        next(error)
        res.status(500).json({ message: 'Iternal server error.' });
    }
}
const deleteUser = async (req, res, next) => {

    const { userId, password } = req.body
    //Obtengo user por id
    const user = await User.findById(userId)

    if (!user) {
        return res.status(404).json({ message: "User not found." })
    }
    const isPassworValid = bcrypt.compare(password, user.password)

    if (!isPassworValid) {
        return res.status(401).json({ message: "Incorrect password" })
    }
    await User.findByIdAndDelete(userId)
    res.status(200).json({ message: "User succesfully deleted" })
}



const logUser = async (req, res, next) => {
    try {
        //Obtengo Mail y Password 
        const { mail, password } = req.body
        //Busco user en BD 
        const user = await User.findOne({ username: mail })

        if (!user) {
            return res.status(401).json({
                status: 401,
                message: "User not found"
            })
        }
        //Comparo la password con la de la BD
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                status: 401,
                message: "Incorrect password"
            });
        }
        /*Genero el token y lo devuelvo en el json al forntend.*/

        const token = jwt.sign({ email: user.email }, 's15646546846165168786465z', { expiresIn: '1h' }); /*clave privada de muestra, se tendria que meter en un archivo fuera del rep (.gitignore)*/

        //Devulevo el user.
        res.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            user: user,
            token: token
        })
    }
    catch (error) {
        next(error)
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }
}

const logoutUser = (req, res, next) => {
    // Aquí podrías realizar cualquier limpieza necesaria
    // No hay mucho que hacer en el backend para el logout si no se manejan tokens en el lado del servidor

    res.status(200).json({
        status: 200,
        message: "Logout successful"
    });
};

/* const userIsAuth = (token) => {

    try {
        jwt.verify(token, 's15646546846165168786465z');
        return true;
    } catch (error) {
        console.error('Token validation error:', error);
        return false;
    }
} */
        /* V2 para pages */
    const userIsAuth = (req, res) => {
        const { token } = req.body;
    
        try {
            jwt.verify(token, 's15646546846165168786465z');
            return res.json({ isAuthenticated: true });
        } catch (error) {
            console.error('Token validation error:', error);
            return res.json({ isAuthenticated: false });
        }
    };


module.exports = { getUserById, getUser, getUsers, createUser, deleteUser, logUser, logoutUser, userIsAuth }  
