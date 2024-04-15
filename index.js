const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 5000;

app.use(fileUpload());

app.get('/', (req, res) => res.send('Hello word'))

app.post('/upload', (req, res) => {
    console.log(req?.files);
    if(!req.files || Object.keys(req.files).length === 0 ){
        return res.status(400).send({message: 'No files uploaded'})
    }

    console.log(req.files);
    res.send({message: 'Files received'})
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})