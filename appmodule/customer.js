var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var Customermaster = module.exports = {};

Customermaster.getcustomerdrop = function getcustomerdrop(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_customerdrop") + "($1,$2,$3::json);", ['c1','c2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

Customermaster.getcustomer = function getcustomer(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_customer") + "($1,$2,$3::json);", ['c1','c2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

Customermaster.saveCustomer=function saveCustomer(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_customer") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}