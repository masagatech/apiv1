var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var employee = module.exports = {};

employee.getEmployeeOld = function getEmployee(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_employee") + "($1,$2::json);", ['emp', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

employee.getEmployee = function getEmployee(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['emp', 'emp1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['emp', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_employee") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

employee.saveEmployee = function saveEmployee(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_employee") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}