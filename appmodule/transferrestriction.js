var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var transferres = module.exports = {};

transferres.saveTransferRestriction=function saveTransferRestriction(req, res, done)
{
    db.callFunction("select " + globals.schema("funsave_transferrestriction") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

transferres.getTransferRestriction = function getTransferRestriction(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_transferrestrection") + "($1,$2,$3::json);", ['tr1','tr2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}