var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var rpt = module.exports = {};

rpt.getBankView = function getBankView(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankview") + "($1,$2::json);", ['bv', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rpt.getBankBook = function getBankBook(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankbook") + "($1,$2::json);", ['bb', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rpt.getBankDashboard = function getBankDashboard(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankdashboard") + "($1,$2::json);", ['bdb', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}