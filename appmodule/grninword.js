var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var grninword = module.exports = {};

grninword.getgrninworddetails = function getgrninworddetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_getgrnindetail") + "($1,$2,$3::json);", ['c1','c2',req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

grninword.savegrninword=function savegrninword(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_grninword") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

grninword.getinwordviewdetails = function getinwordviewdetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_grninwordview") + "($1,$2,$3::json);", ['c1','c2',req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}