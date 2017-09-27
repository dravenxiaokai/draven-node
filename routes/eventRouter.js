const express = require('express')
const router = express.Router()

router
    .route('/events')
    .get((req, res) => {
        res.send({
            message: 'hello events ~'
        })
    })


module.exports = router