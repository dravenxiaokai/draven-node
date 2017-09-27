const Event = require('../models/event')

const index = (req, res) => {
    Event
        .find()
        .then(documents => res.send(documents))
}

const store = (req, res) => {
    // console.log(req.body)
    const event = new Event({
        title: req.body.title
    })
    event.save()
        .then(document => res.send(document))
}

const show = (req, res) => {
    const id = req.params.id
    Event.findById(id)
        .then(document => res.send(document))
}

const update = (req, res) => {
    const id = req.params.id
    const body = {
        title: req.body.title
    }
    Event.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(document => res.send(document))
}

const destroy = (req, res) => {
    const id = req.params.id

    Event.findByIdAndRemove(id)
        .then(document => res.send(document))
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}