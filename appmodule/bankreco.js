var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var bankreco = module.exports = {};

bankreco.saveBankReco = function saveBankReco(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_bankreco") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

bankreco.getBankReco = function getBankReco(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_bankreco") + "($1,$2::json);", ['br', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}