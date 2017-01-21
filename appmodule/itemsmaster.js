var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var itemsmaster = module.exports = {};

itemsmaster.saveItemsMaster = function saveItemsMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_itemsmaster") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

itemsmaster.getItemsMaster = function getItemsMaster(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsmaster") + "($1,$2::json);", ['acg', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

itemsmaster.getdoprodwn = function getdoprodwn(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_itemsmasterdrop") + "($1,$2,$3::json);", ['acg','acg1' ,req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}
