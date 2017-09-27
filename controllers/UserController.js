const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

const auth = (req, res) => {
    User.findOne({ userName: req.body.userName })
        .then(user => {
            if (!user) {
                return Promise.reject({ message: '没找到用户' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (result) {
                        const payload = {
                            userName: user.userName
                        }
                        const secret = 'I_LOVE_DRAVEN'
                        const token = jwt.sign(payload, secret)

                        res.send({ token })
                    } else {
                        res.status(401).send({ message: '未通过身份验证' })
                    }
                })
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

const me = (req, res) => {
    res.send(`hello ~ ${req.decoded.userName}`)
}

module.exports = {
    store,
    auth,
    me
}