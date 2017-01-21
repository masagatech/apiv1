var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var expense = module.exports = {};

expense.getAllExpenseCtrlMap = function getAllExpenseCtrlMap(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_expensectrlmap") + "($1,$2,$3::json);", ['expense', 'expense1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

expense.getExpenseCtrlMap = function getExpenseCtrlMap(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_expensectrlmap") + "($1,'a',$2::json);", ['expense', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

expense.saveExpenseCtrlMap = function saveExpense(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_expensectrlmap") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}