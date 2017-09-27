const express = require('express')
const app = express()
const multer = require('multer')

const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('images only :)'), false)
    }
    callback(null, true)
}

const upload = multer({ dest: 'uploads/', fileFilter })

app.post('/profile', upload.single('avatar'), (req, res, next) => {
    res.send(req.file)
})

// app.post('/photo/upload', upload.fields([{ name: 'photos', maxCount: 3 }])
app.post('/photos/upload', upload.array('photos', 3), (req, res, next) => {
    res.send(req.files)
})

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message
    })
})

app.listen(8080, () => {
    console.log('localhost:8080')
})