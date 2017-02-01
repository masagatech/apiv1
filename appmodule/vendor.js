var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var Vendormaster = module.exports = {};

Vendormaster.getvendordrop = function getvendordrop(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_customerdrop") + "($1,$2,$3,$4,$5::json);", ['c1','c2','c3','c4', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 4)
}

Vendormaster.getvendor = function getvendor(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_vendor") + "($1,$2,$3::json);", ['c1','c2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

Vendormaster.saveVendor=function saveVendor(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_vendor") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}