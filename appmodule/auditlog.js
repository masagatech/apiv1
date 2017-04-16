var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var auditlog = module.exports = {};

auditlog.getAuditLog = function getAuditLog(req, res, done) {
    db.callProcedure("select " + globals.schema2("funget_log") + "($1,$2::json);", ['al', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

auditlog.saveAuditLog = function saveAuditLog(req, res, done) {
    db.callFunction("select " + globals.schema2("funsave_log") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}