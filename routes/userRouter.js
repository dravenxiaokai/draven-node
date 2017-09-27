const express = require('express')
const router = express.Router()
const UserController = require('../controllers/Usercontroller')

router.route('/users')
    .post(UserController.store)

module.exports = router