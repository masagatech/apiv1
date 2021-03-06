var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var attribute = module.exports = {};

attribute.saveAttribute=function saveAttribute(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_attribute") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}


attribute.getAttribute = function getAttribute(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_attribute") + "($1,$2,$3::json);", ['atr1','atr2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}