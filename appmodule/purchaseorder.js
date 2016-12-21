var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");
var purchaseord = module.exports = {};

purchaseord.savePurchaseOrder = function savePurchaseOrder(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_purchaseord") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

purchaseord.getitemsDetails = function getitemsDetails(req, res, done) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}
