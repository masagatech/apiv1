var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var purchaseinv = module.exports = {};

purchaseinv.getpurdocumentno = function getpurdocumentno(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_purchasedocnodetail") + "($1,$2,$3,$4::json);", ['pu1','pu2','pu3', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 3)
}

purchaseinv.savePurchaseInvoice = function savePurchaseInvoice(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_purchaseinvoice") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}