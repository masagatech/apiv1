var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var address = module.exports = {};

address.saveAddress=function saveAddress(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_addressbook") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

address.getAddress = function getAddress(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_addressbook") + "($1,$2::json);", ['adr', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}