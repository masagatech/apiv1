var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var dynflds = module.exports = {};

dynflds.getDynamicFields = function getDynamicFields(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_dynamicfields") + "($1,$2::json);", ['dyn', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

dynflds.saveDynamicFields = function saveDynamicFields(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_dynamicfields") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}