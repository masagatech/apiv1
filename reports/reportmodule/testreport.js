var db = require("../../db/dbservice.js");
var rs = require("./util/represp.js");
var globals = require("../../globals.js");

var testreport = module.exports = {};

testreport.getrep = function getrep(req, res, done) {
    rs.resp('test.html', { name: "pratik" }, req, res, done);
    // db.callFunction("select " + globals.schema("funsave_addressbook") + "($1::json);", [req.body], function(data) {
    //     rs.resp(res, 200, data.rows);
    // }, function(err) {
    //     rs.resp(res, 401, "error : " + err);
    // })
}