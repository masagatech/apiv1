var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var openstock = module.exports = {};   


openstock.getopeningstock = function getopeningstock(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_openingstock") + "($1,$2,$3::json);", ['ops1','ops2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

openstock.saveWareOpeningStock = function saveWareOpeningStock(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_wareopeningstock") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}