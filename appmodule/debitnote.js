var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var debitnote = module.exports = {};

debitnote.getDebitNote = function getDebitNote(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "docrange":
            params = ['dn','dn1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        case "details":
            params = ['dnd','dnd1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['dn', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_debitnote") + paramstr,params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

debitnote.saveDebitNote = function saveDebitNote(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_debitnote") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}