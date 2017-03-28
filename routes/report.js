var reportPath = "../reports/reportmodule/";

//report modules
var testRpt = require(reportPath + "testreport.js");
var bbRpt = require(reportPath + "bankbook/bbrpt.js");;





var appReportRouter = function(app) {
    app.get("/repo", testRpt.getrep);
    app.get("/bankbook", bbRpt.getRptBankBook);
}

module.exports = appReportRouter;