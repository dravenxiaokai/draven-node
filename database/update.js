const Event = require('../models/event')

let id = '59c8e14a54883126a84d1dcb'
let body = {
    title: 'Google I/O 开发者大会'
}

Event.findByIdAndUpdate(id, { $set: body }, { new: true })
.then(document => console.log(document))