// const crypto = require('crypto')
// const hash = crypto.createHash('sha256')

// hash.update('password')
// console.log(hash.digest('base64'))

const bcrypt = require('bcryptjs')

const password = 'password'

bcrypt.genSalt(10, (err, salt) => {
    console.log('salt: ', salt)
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash: ', hash)
    })
})

const hashPassword = '$2a$10$D5HtOYGHAUuGjLzXiRFZJeo8IL1isvB4HwxWK4H6BYo9RqpT.agwK'
const userInputPassword = 'password'
 
bcrypt.compare(userInputPassword, hashPassword)
    .then(result => console.log(result))