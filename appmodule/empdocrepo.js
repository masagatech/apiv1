var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var empdocrepo = module.exports = {};

empdocrepo.getEmpDocRepo = function getEmpDocRepo(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_empdocrepo") + "($1,$2::json);", ['empdocrepo', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

empdocrepo.saveEmpDocRepo = function saveEmpDocRepo(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_empdocrepo") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}