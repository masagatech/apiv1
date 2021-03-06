var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var warehousetranf = module.exports = {};

warehousetranf.saveWarehouseTranf = function saveWarehouseTranf(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_warehousetransfer") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

warehousetranf.getwarehouseTransfer = function getwarehouseTransfer(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_warehousetransfer") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}