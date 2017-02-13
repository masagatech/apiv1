var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var budget = module.exports = {};

budget.getBudget = function getBudget(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['budget','budget1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['budget', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_budget") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

budget.saveBudget = function saveBudget(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_budget") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}