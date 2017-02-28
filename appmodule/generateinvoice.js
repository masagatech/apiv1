var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var generateinv = module.exports = {};

generateinv.getdocumentno = function getdocumentno(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_generatependingdetail") + "($1,$2,$3,$4::json);", ['c1','c2','c3', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 3)
}

generateinv.saveGenerateInvoice=function saveGenerateInvoice(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_generateinvoice") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}