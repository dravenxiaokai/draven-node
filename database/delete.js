const Event = require('../models/event')

Event
    .findByIdAndRemove('59c8e14a54883126a84d1dca')
    .then(document => console.log(document))