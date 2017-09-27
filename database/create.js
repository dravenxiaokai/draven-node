
const Event = require('../models/event')

const event1 = new Event({
    title: 'Node.js 开发者大会'
})

event1.save()
    .then(document => console.log(document))
.catch(err => console.log(err))