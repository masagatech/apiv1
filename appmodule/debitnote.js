var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var debitnote = module.exports = {};

debitnote.getDebitNote = function getDebitNote(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_debitnote") + "($1,$2::json);", ['debitnote', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

debitnote.saveDebitNote = function saveDebitNote(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_debitnote") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}