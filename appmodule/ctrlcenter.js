var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var ctrlcenter = module.exports = {};

ctrlcenter.saveCtrlcenter=function saveCtrlcenter(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_ctrlcenter") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

ctrlcenter.getCtrlcenter = function getCtrlcenter(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_ctrlcenter") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}