var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var user = module.exports = {};

user.getLogin = function getLogin(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_login") + "($1,$2::json);", ['login', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}