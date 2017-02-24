var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var saleorder = module.exports = {};

saleorder.salesorderdetails = function salesorderdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_salesorderdetails") + "($1,$2::json);", ['dc1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

saleorder.getdcitemsdetails = function getdcitemsdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsdetails") + "($1,$2::json);", ['dc', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

saleorder.getPendingDocumentNo = function getPendingDocumentNo(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_pendingorderdocno") + "($1,$2::json);", ['dc', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

saleorder.getPendingOrderDetails = function getPendingOrderDetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_orderpendingdetails") + "($1,$2,$3::json);", ['dcd','dcd1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

saleorder.saveDcMaster=function saveDcMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_salesorder") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

saleorder.saveConfirmOrder=function saveConfirmOrder(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_salesorderconfirm") + "($1::json,$2::int);", [req.body,req.body.docno], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}