var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var transpoter = module.exports = {};

transpoter.getTranspoter = function getTranspoter(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_transpoter") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

transpoter.saveTranspoter=function saveTranspoter(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_transpoter") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}