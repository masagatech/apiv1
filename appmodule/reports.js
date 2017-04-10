var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var rpt = module.exports = {};

rpt.getBankView = function getBankView(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankview") + "($1,$2::json);", ['bv', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rpt.getBankBook = function getBankBook(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankbook") + "($1,$2::json);", ['bb', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rpt.getBankDashboard = function getBankDashboard(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bankdashboard") + "($1,$2::json);", ['bdb', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

rpt.getLedger = function getLedger(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_ledger") + "($1,$2,$3::json);", ['ldr1', 'ldr2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getProfitNLoss = function getProfitNLoss(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_pnl") + "($1,$2,$3::json);", ['pnl1', 'pnl2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getBalanceSheet = function getBalanceSheet(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_bsr") + "($1,$2,$3::json);", ['bsr1', 'bsr2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getTrialBalance = function getTrialBalance(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_trialbalance") + "($1,$2,$3::json);", ['tbc1', 'tbc2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getDebtorsRpt = function getDebtorsRpt(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_debtors") + "($1,$2,$3::json);", ['dr1', 'dr2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getJVReport = function getJVReport(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_jv") + "($1,$2,$3::json);", ['jv1', 'jv2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getPDCReport = function getPDCReport(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_pdc") + "($1,$2,$3::json);", ['pdc1', 'pdc2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}

rpt.getSalesReport = function getSalesReport(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_rpt_sales") + "($1,$2,$3::json);", ['pdc1', 'pdc2', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2)
}