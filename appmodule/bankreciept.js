var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var bankrecipt = module.exports = {};


bankrecipt.getBankMaster = function getBankMaster(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_auto") + "($1,$2::json);", ['auto', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

bankrecipt.savebankreciept=function savebankreciept(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_bankreceipt") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

bankrecipt.getbankreciptview = function getbankreciptview(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_bankreciept") + "($1,$2::json);", ['auto', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}