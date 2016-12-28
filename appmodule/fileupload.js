var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var path = require('path'),
    fs = require('fs');
var formidable = require('formidable');
var fileupload = module.exports = {};

//file upload example

fileupload.uploadFile = function uploadFile(req, res, done) {

    var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = "./uploads"; //set upload directory
    form.keepExtensions = true; //keep file extension

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");
        //TESTING
        console.log("file size: " + JSON.stringify(files.fileUploaded.size));
        console.log("file path: " + JSON.stringify(files.fileUploaded.path));
        console.log("file name: " + JSON.stringify(files.fileUploaded.name));
        console.log("file type: " + JSON.stringify(files.fileUploaded.type));
        console.log("astModifiedDate: " + JSON.stringify(files.fileUploaded.lastModifiedDate));

        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
        fs.rename(files.fileUploaded.path, './uploads/' + files.fileUploaded.name, function(err) {
            if (err)
                throw err;
            console.log('renamed complete');
        });
        res.end();
    });
    // if (path.extname(req.files.file.name).toLowerCase() === '.png') {
    //     fs.rename(tempPath, targetPath, function(err) {
    //         if (err) throw err;
    //         console.log("Upload completed!");
    //     });
    // } else {
    //     fs.unlink(tempPath, function() {
    //         if (err) throw err;
    //         console.error("Only .png files are allowed!");
    //     });
    // }

}