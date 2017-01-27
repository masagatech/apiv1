var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var expense = module.exports = {};

expense.getAllExpenseBudget = function getAllExpenseBudget(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_expensebudget") + "($1,$2,$3::json);", ['expense', 'expense1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

expense.getExpenseBudgetDetails = function getExpenseBudget(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_expensebudget") + "($1,'a',$2::json);", ['expense', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

expense.saveExpenseBudget = function saveExpenseBudget(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_expensebudget") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}