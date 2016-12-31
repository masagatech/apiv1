var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var warehouse = module.exports = {};

warehouse.saveWarehouse=function saveWarehouse(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_warehouse") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

warehouse.getwarehouse = function getwarehouse(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_warehouse") + "($1,$2,$3::json);", ['wa1','wa2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}