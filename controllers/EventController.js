const Event = require('../models/event')

const index = (req, res) => {
    Event
        .find()
        .then(documents => res.send(documents))
}

module.exports = {
    index
}