
const db = require('../config/database')

const options = {}

const schema = new db.Schema({
    title: {
        type: String
    }
}, options)

const Event = db.model('events', schema)

module.exports = Event