var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var pdc = module.exports = {};

pdc.getpdc = function getpdc(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_pdc") + "($1,$2::json);", ['pdc', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

pdc.savepdc = function savepdc(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_pdc") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}