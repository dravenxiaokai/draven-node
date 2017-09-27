const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/profile', upload.single('avatar'), (req, res, next) => {
    res.send(req.file)
})

app.listen(8080, () => {
    console.log('localhost:8080')
})