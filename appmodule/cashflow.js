var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var cashflow = module.exports = {};

cashflow.getCashFlow = function getCashFlow(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "docrange":
            params = ['cf','cf1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        case "details":
            params = ['cf','cf1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['cf', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_cashflow") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

cashflow.saveCashFlow = function saveCashFlow(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_cashflow") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}