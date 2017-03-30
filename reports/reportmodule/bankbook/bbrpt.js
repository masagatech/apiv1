var db = require("../../../db/dbservice.js");
var rs = require("../util/represp.js");
var globals = require("../../../globals.js");

var bankbook = module.exports = {};

bankbook.getRptBankBook = function getRptBankBook(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankbook") + "($1,$2::json);", ['bb', req.query], function(data) {
        var _bbdata = {
            data: data.rows,
            format: function() {
                return function(text, render) {
                    return "<b>" + render('b') + "</b>";
                }
            }
        };

        rs.resp('bankbook/bbrpt.html', _bbdata, req, res, done);



        // for (var i = 0; i < _bbdata.data.length; i++) {
        //     var items = _bbdata.data[i];
        //     if (i < _bbdata.data.length - 1) {
        //         var nextRow = _bbdata.data[i + 1];
        //         nextRow.openingbal = parseFloat(items.closingbal);
        //         nextRow.closingbal = ((parseFloat(nextRow.openingbal) + parseFloat(nextRow.dramt)) - parseFloat(nextRow.cramt));
        //     }
        // }
    }, function(err) {
        rs.resp('bankbook/bbrpt.html', { name: "pratik" }, req, res, done);
    }, 1)
}