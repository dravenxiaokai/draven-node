const User = require('../models/user')
const bcrypt = require('bcryptjs')

const store = (req, res) => {
    const userName = req.body.userName

    bcrypt.hash(req.body.password, 10)
        .then(password => {

            const user = new User({
                userName,
                password
            })

            user.save()
                .then(() => res.send({ message: '注册成功' }))
                .catch(err => console.log(err))
        })

}

module.exports = {
    store
}