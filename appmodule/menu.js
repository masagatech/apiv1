var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var menu = module.exports = {};

menu.getmenu = function getmenu(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_menuhead") + "($1,$2::json);", ['head', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}