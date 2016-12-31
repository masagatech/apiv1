var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var dcmaster = module.exports = {};

dcmaster.getdcdropdetails = function getdcdropdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_dcdropdetails") + "($1,$2,$3,$4::json);", ['dc1','dc2','dc3', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 3)
}

dcmaster.getdcitemsdetails = function getdcitemsdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsdetails") + "($1,$2::json);", ['dc', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

dcmaster.getdcdetails = function getdcdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_dcdetails") + "($1,$2::json);", ['dcd', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

dcmaster.saveDcMaster=function saveDcMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_dcmaster") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}