var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var jv = module.exports = {};

jv.getjv = function getjv(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_jv") + "($1,$2::json);", ['jv', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

jv.savejv = function savejv(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_jv") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}