var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var employee = module.exports = {};

employee.getEmployee = function getEmployee(req, res, done) {
    db.callProcedure("select " + globals.schema("employee_get") + "($1,$2::json);", ['emp', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}