var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var common = module.exports = {};

common.getAutoData = function getAutoData(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_auto") + "($1,$2::json);", ['auto', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

common.checkValidate = function checkValidate(req, res, done) {
    db.callProcedure("select " + globals.schema("funcheck_validate") + "($1,$2::json);", ['auto', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

common.getMOM = function getMOM(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_mom") + "($1,$2::json);", ['mom', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

common.saveMOM = function saveMOM(req, res, done) {
    db.callProcedure("select " + globals.schema("funsave_mom") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}