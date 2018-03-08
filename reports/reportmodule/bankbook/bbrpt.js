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
    }, function(err) {
        rs.resp('bankbook/bbrpt.html', { name: "pratik" }, req, res, done);
    }, 1)
}