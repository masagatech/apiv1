var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var rb = module.exports = {};

rb.getAllRB = function getAllRB(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_receiptbook") + "($1,$2,$3::json);", ['rb', 'rb1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rb.getRBDetails = function getRBDetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_receiptbook") + "($1,'a',$2::json);", ['rb', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rb.saveReceiptBook = function saveReceiptBook(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_receiptbook") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}