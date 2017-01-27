var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var valid = module.exports = {};

valid.checkdatevalidate = function checkdatevalidate(req, res, done) {
    db.callProcedure("select " + globals.schema("funcheck_datevalidate") + "($1,$2::json);", ['valid', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}