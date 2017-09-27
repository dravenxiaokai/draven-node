const express = require('express')
const app = express()
const multer = require('multer')
const loki = require('lokijs')

const db = new loki('uploads/uploads.json', { persistenceMethod: 'fs' })

const loadCollection = (collectionName, db) => {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const collection = db.getCollection(collectionName) || db.addCollection(collectionName)
            resolve(collection)
        })
    })
}

const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('images only :)'), false)
    }
    callback(null, true)
}

const upload = multer({ dest: 'uploads/', fileFilter })

// nodejs 7 以后才可以使用 async
app.post('/profile', upload.single('avatar'), async (req, res, next) => {
    // res.send(req.file)
    const collection = await loadCollection('uploads', db)
    const result = collection.insert(req.file)
    db.saveDatabase()
    res.send(result)
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