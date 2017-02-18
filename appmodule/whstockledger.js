var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var stockledger = module.exports = {}; 

stockledger.getStockLedger = function getStockLedger(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_stockledger") + "($1,$2,$3::json);", ['st1','st2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}