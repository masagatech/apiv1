var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var accountledger = module.exports = {};

accountledger.saveAccountLedger=function saveAccountLedger(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_coa") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

accountledger.getAccountLedger = function getAccountLedger(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_coa") + "($1,$2,$3::json);", ['acg1','acg2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

accountledger.getAccountLedgeracinfo = function getAccountLedgeracinfo(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_coaacinfo") + "($1,$2::json);", ['acg1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    },1)
}