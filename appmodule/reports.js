var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var rpt = module.exports = {};

rpt.getAPARReports = function getAPARReports(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_apar_reports") + "($1,$2::json);", ['apar', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}