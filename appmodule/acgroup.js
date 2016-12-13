var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var acgroup = module.exports = {};

acgroup.getAcgroup = function getAcgroup(req, res, done) {
    db.callProcedure("select " + globals.schema("acgroup_get") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}