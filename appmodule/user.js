var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var globals = require("../globals.js");

var user = module.exports = {};

user.getLogin = function getLogin(req, res, done) {
    var _data = getUserData(req);

    db.callProcedure("select " + globals.schema("funget_login") + "($1,$2::json);", ['login', _data], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

function getUserData(req) {
    var data = req.body;

    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    var other = data.otherdetails;
    other.IP = ip;

    data.other = other;
    return data;
}

user.savePassword = function savePassword(req, res, done) {
    db.callProcedure("select " + globals.schema("funsave_changepwd") + "($1,$2::json);", ['changepwd', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}

user.getLogout = function getLogout(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_logout") + "($1,$2::json);", ['logout', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}


user.saveSettings = function saveSettings(req, res, done) {
    db.callFunction("select " + globals.schema("funsave_usersettings") + "($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}


user.getSettings = function getSettings(req, res, done) {
    db.callProcedure("select " + globals.schema("funget_usersettings") + "($1,$2::json);", ['usrsettings', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 1)
}