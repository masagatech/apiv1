var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var auditlock = module.exports = {};

auditlock.getAuditLockSetting = function getAuditLockSetting(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_auditlocksetting") + "($1,$2::json);", ['auditlocksetting', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

auditlock.saveAuditLockAction = function saveAuditLockAction(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_auditlockaction") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}