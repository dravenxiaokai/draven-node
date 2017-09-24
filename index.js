// const os = require('os')
// console.log(os.hostname())

// const request = require('request')

// request({
//     url: 'https://api.douban.com/v2/book/1220562',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body, null, 2))
// })

// const greeting = require('./src/greeting')

// greeting.hello()

// const EventEmitter = require('events')

// class Player extends EventEmitter{}

// var player = new  Player()

// player.on('play',(track)=>{
//     console.log(`正在播放：《${track}》`)
// })

// player.emit('play','再见理想')
// player.emit('play','海阔天空')

// const fs = require('fs')

// fs.stat('index.js', (error, stats) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(stats)
//         console.log(`文件：${stats.isFile()}`)
//         console.log(`目录：${stats.isDirectory()}`)
//     }
// })

// const fs = require('fs')

// fs.mkdir('logs', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('成功创建目录：logs')
//     }
// })

// const fs = require('fs')

// fs.writeFile('logs/hello.log', '您好 ~ \n', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('成功写入文件')
//     }
// })

// fs.appendFile('logs/hello.log', 'hello ~ \n', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('成功写入文件')
//     }
// })

// const fs = require('fs')

// fs.readFile('logs/hello.log', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// const fs = require('fs')

// fs.readdir('logs', (err, files) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(files)
//     }
// }) // [ 'hello.log' ]

// const fs = require('fs')

// fs.rename('logs/hello.log','logs/greeting.log',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('重命名成功')
//     }
// })

// const fs = require('fs')

// fs.readdirSync('logs').map((file) => {
//     fs.unlink(`logs/${file}`, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(`成功的删除了文件：${file}`)
//         }
//     })
// })

// fs.rmdir('logs', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('成功的删除了目录：logs')
//     }
// })

// const fs = require('fs')

// var count = 0
// var fileReadStream = fs.createReadStream('data.json')
// var fileWriteStream = fs.createWriteStream('data-1.json')
// // fileReadStream.once('data', (chunk) => {
// //     console.log(chunk)
// // })
// fileReadStream.on('data', (chunk) => {
//     console.log(`${++count} 接收到:${chunk.length}`)
//     fileWriteStream.write(chunk)
// })
// fileReadStream.on('end', () => {
//     console.log('--- 结束 ---')
// })
// fileReadStream.on('error', () => {
//     console.log(error)
// })

// const fs = require('fs')
// var fileReadStream = fs.createReadStream('data.json')
// var fileWriteStream = fs.createWriteStream('data-1.json')
// fileReadStream.pipe(fileWriteStream)

// gzip压缩
// const fs = require('fs')
// const zlib = require('zlib')
// var fileReadStream = fs.createReadStream('data.json')
// var fileWriteStream = fs.createWriteStream('data.json.gz')

// fileWriteStream.on('pipe', (source) => {
//     console.log(source)
// })

// fileReadStream
//     .pipe(zlib.createGzip())
//     .pipe(fileWriteStream)

const http = require('http')

var options = {
    protocol: 'http:',
    hostname: 'api.douban.com',
    port: '80',
    method: 'GET',
    path: '/v2/movie/top250'
}

var responseDate = ''

var request = http.request(options, (res) => {
    // console.log(res)
    // console.log(res.statusCode)
    // console.log(res.headers)
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        // console.log(chunk)
        responseDate += chunk
    })
    res.on('end', () => {
        JSON.parse(responseDate).subjects.map((item) => {
            console.log(item.title)
        })
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()