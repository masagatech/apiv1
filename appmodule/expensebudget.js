var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var expense = module.exports = {};

expense.getMonthDetails = function getMonthDetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_monthdetails") + "($1,$2::json);", ['md', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

expense.viewStartForeCasting = function viewStartForeCasting(req, res, done) {
    db.callProcedure("select " + globals.schema("funview_startforecasting") + "($1,$2,$3::json);", ['sf','sf1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

expense.getStartForeCasting = function getStartForeCasting(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_startforecasting") + "($1,$2::json);", ['sf', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

expense.saveStartForeCasting = function saveStartForeCasting(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_startforecasting") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}