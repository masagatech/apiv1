var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var itemsgroup = module.exports = {};


itemsgroup.getItemsname = function getItemsname(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsgroup") + "($1,$2::json);", ['it1', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

itemsgroup.saveItemsGroup = function saveItemsGroup(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_itemgroup") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}