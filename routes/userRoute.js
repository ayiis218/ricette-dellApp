const express = require('express')
const Router = express.Router()

const controller = require('../controllers/userControllers')
const userImages = require('../middlewares/userImages')
const {checkToken} = require('../middlewares/auth')


Router.get('/users', controller.allUser)
Router.get('/users/id', controller.UserId)
Router.post('/users/add', userImages.upload, checkToken, controller.createUser)
Router.put('/users/update/id', userImages.upload, checkToken, controller.updateUser)
Router.delete('/user/delete/id', checkToken, controller.deleteUser)
/*Router.put('/users/update/id', controller.updatePhoto)
Router.put('/users/update/id', controller.updatepass) */

module.exports = Router