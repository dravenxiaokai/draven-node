const express = require('express')
const router = express.Router()
const UserController = require('../controllers/Usercontroller')

router.route('/users')
    .post(UserController.store)

router.post('/auth', UserController.auth)

module.exports = router