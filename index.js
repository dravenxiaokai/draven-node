const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/profile', upload.single('avatar'), (req, res, next) => {
    res.send(req.file)
})

// app.post('/photo/upload', upload.fields([{ name: 'photos', maxCount: 3 }])
app.post('/photos/upload', upload.array('photos', 3), (req, res, next) => {
    res.send(req.files)
})

app.listen(8080, () => {
    console.log('localhost:8080')
})