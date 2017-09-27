const User = require('../models/user')

const store = (req, res) => {
    const userName = req.body.userName
    const password = req.body.password

    const user = new User({
        userName,
        password
    })

    user.save()
        .then(() => res.send({ message: '注册成功' }))
        .catch(err => console.log(err))
}

module.exports = {
    store
}