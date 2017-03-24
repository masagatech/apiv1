var reprs = module.exports = {};

var mu = require('mu2'),
    util = require('util');
var pdf = require('phantom-html2pdf');
var tempFile = require('tmp');
var fs = require('fs');
var globals = require("../../../globals.js");


mu.root = globals.reportTemplatePath();

reprs.resp = function resp(template, data, req, res, done) {
    try {
        var stream = mu.compileAndRender(template, data);

        var tmpobj = tempFile.fileSync({ mode: 0644, prefix: 'reports-', postfix: '.html' });
        // console.log(tmpobj.name);
        const file = fs.createWriteStream(tmpobj.name);
        stream.pipe(file);

        pdf.convert({
            "html": tmpobj.name,
            "paperSize": { format: 'A4', orientation: 'portrait', border: '1cm' },
            "deleteOnAction": true
        }, function(err, result) {
            /* Using a buffer and callback */
            //result.toBuffer(function(returnedBuffer) {});
            /* Using a readable stream */
            var stream = result.toStream();
            /* Using the temp file path */
            //var tmpPath = result.getTmpPath();
            stream.pipe(res);

            /* Using the file writer and callback */
            //  result.toFile("/path/to/file.pdf", function() {});
        });

    } catch (error) {
        console.log(error)

    }
}