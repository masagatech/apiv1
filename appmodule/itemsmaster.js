var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var itemsmaster = module.exports = {};

itemsmaster.saveItemsMaster = function saveItemsMaster(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_itemsmaster") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}
