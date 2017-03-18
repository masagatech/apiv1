var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var purchaseord = module.exports = {};

purchaseord.savePurchaseOrder = function savePurchaseOrder(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_purchaseord") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

purchaseord.getitemsDetails = function getitemsDetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsdetails") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

purchaseord.getpurchaseview = function getpurchaseview(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_purchaseview") + "($1,$2,$3::json);", ['pur1','pur2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}