var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var menu = module.exports = {};

menu.getMenuHead = function getMenuHead(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_menuhead") + "($1,$2,$3,$4::json);", ['head', 'head1', 'head2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 3)
}

menu.getMenu = function getMenu(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_menuhead") + "($1,'a','b',$2::json);", ['head', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}