var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var fy = module.exports = {};

fy.getfy = function getfy(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_fy") + "($1,$2::json);", ['fy', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

fy.savefy = function savefy(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_fy") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

fy.saveCompanyFYMap = function savefy(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_companyfymap") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}