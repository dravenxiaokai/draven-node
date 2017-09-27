const express = require('express')
const router = express.Router()
const UserController = require('../controllers/Usercontroller')
const authenticate = require('../middleware/authenticate')

router.route('/users')
    .post(UserController.store)

router.post('/auth', UserController.auth)

router.get('/me', authenticate, UserController.me)

module.exports = router