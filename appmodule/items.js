var db = require("../db/dbservice.js");
var rs = require("./util/resp.js");
var items = module.exports = {};


items.getItems = function getItems(req, res, done) {
    db.callProcedure("select pos.get_items($1,$2::json);", ['items', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

items.getSideItems = function getSideItems(req, res, done) {
    db.callProcedure("select pos.get_sides($1,$2::json);", ['sideitems', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

items.getComboItems = function getComboItems(req, res, done) {
    db.callProcedure("select pos.get_combos($1,$2::json);", ['combos', req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    })
}

items.createItems = function createItems(req, res, done) {
    db.callFunction("select pos.create_items($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    });
}

items.getItemsGrid = function getItemsGrid(req, res, done) {
    db.callProcedure("select pos.get_items_grid($1,$2,$3::json);", ['item1', 'item2', req.body], function(data) {
        rs.gridresp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2);
}

//combos
items.createCombo = function createCombo(req, res, done) {
    db.callFunction("select pos.create_combo($1::json);", [req.body], function(data) {
        rs.resp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    });
}

items.getComboGrid = function getComboGrid(req, res, done) {
    db.callProcedure("select pos.get_combos_grid($1,$2,$3::json);", ['combo1', 'combo2', req.body], function(data) {
        rs.gridresp(res, 200, data.rows);
    }, function(err) {
        rs.resp(res, 401, "error : " + err);
    }, 2);
}