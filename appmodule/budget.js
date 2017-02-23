var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var budget = module.exports = {};

// Inititate

budget.getInitiate = function getInitiate(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['bdginit','bdginit1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['bdginit', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_bdginitiate") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

budget.saveInitiate = function saveBudget(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_bdginitiate") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

// Committee

budget.getCommittee = function getCommittee(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['bdgcmt','bdgcmt1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['bdgcmt', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_bdgcmt") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

budget.saveCommittee = function saveCommittee(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_bdgcmt") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

// Envelope

budget.getEnvelope = function geEnvelope(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['bdgenv','bdgenv1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['bdgenv', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_bdgenv") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

budget.saveEnvelope = function saveEnvelope(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_bdgenv") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

// Ownership

budget.getOwnership = function getOwnership(req, res, done) {
    var params = [];
    var paramstr = "";
    var countr  = 1;
    
    switch (req.body.flag) {
        case "all":
            params = ['bdgowner','bdgowner1', req.body];
            paramstr = "($1,$2,$3::json);";
            countr = 2;
            break;
        default:
            params = ['bdgowner', req.body];
            paramstr = "($1,'a',$2::json);";
            countr = 1;
            break;
    }

    db.callProcedure("select " + globals.schema("funget_bdgownership") + paramstr, params, function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, countr)
}

budget.saveOwnership = function saveCommittee(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_bdgownership") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}