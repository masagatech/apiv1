var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var taxmaster = module.exports = {};

taxmaster.saveTaxMaster=function saveTaxMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_taxmaster") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

taxmaster.getTaxMaster = function getTaxMaster(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_taxmaster") + "($1,$2,$3::json);", ['so1','so2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

