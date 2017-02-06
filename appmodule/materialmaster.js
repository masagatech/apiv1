var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var material = module.exports = {};

material.savematerialMaster = function savematerialMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_materialmaster") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

material.getmaterialMaster = function getmaterialMaster(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_materialmaster") + "($1,$2,$3::json);", ['c1','c2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}