var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var Invlocal = module.exports = {};

Invlocal.Inventoryloc = function Inventoryloc(req, res, done)
{
    db.callProcedure("select " + globals.schema("funget_inventoryope") + "($1,$2::json);", ['invlo', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

Invlocal.saveLocation = function saveLocation(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_inventorylocal") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

Invlocal.getInventoryloc = function getInventoryloc(req, res, done)
{
    db.callProcedure("select " + globals.schema("funget_inventorylocation") + "($1,$2,$3::json);", ['invlo','invlo1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}