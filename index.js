// const os = require('os')
// console.log(os.hostname())

// const request = require('request')

// request({
//     url: 'https://api.douban.com/v2/book/1220562',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body, null, 2))
// })

const greeting = require('./src/greeting')

greeting.hello()