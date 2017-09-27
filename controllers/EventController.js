const Event = require('../models/event')

const index = (req, res) => {
    res.send({
        message: 'hello events ~'
    })
}

module.exports = {
    index
}