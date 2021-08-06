// Dependencies
const express = require('express');
const uploadRouter = express.Router();
const path = require('path');
const fileUploader = require('express-fileupload');
const fs = require('fs');
uploadRouter.use(fileUploader());

// configs
let reqPath = path.join(__dirname, '../views'); // location of views directory
var uplodFilePage = fs.readFileSync(reqPath + '/upload.html'); // location of upload html page
var upload_path = path.join(__dirname , '../uploads/'); // Download path

// routes

// get route to serve html page
uploadRouter.get('/upload', (req, res) => {

    console.log("File upload page being loaded");
    
    res.writeHead(200);
    res.write(uplodFilePage);
    res.end();

    console.log("File upload page loaded");
});

// post request to handle file upload
uploadRouter.post('/upload', (req, res) => {
    console.log("File upload request received");

    var file = req.files.file;
    var filename = file.name;
    console.log(filename);

    file.mv(upload_path + filename, (err) => {
        if (err) {
            console.log(err);
            return res.end("Error uploading file.");
        } else {
            console.log("File uploaded successfully");
            res.status(200).send(filename + " uploaded successfully");
        }
    });
    
});

module.exports = uploadRouter;