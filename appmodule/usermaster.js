var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var user = module.exports = {};

user.getUserDetails = function getUserDetails(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_userdetails") + "($1,$2::json);", ['users', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

user.getUserGrid = function getUserGrid(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_usergrid") + "($1,$2,$3::json);", ['user', 'user1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

user.saveUser = function saveUser(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_user") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}