var reportPath = "../reports/reportmodule/";

//report modules
var testRpt = require(reportPath + "testreport.js");;





var appReportRouter = function(app) {
    app.get("/repo", testRpt.getrep);
}

module.exports = appReportRouter;