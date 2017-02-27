var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var generateinv = module.exports = {};

generateinv.getdocumentno = function getdocumentno(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_generatependingdoc") + "($1,$2::json);", ['c1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}