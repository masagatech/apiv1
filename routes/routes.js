var items = require('../appmodule/items.js');
var headmenu = require('../appmodule/menu.js');
var common = require('../appmodule/common.js');
var user = require('../appmodule/user.js');
var emp = require('../appmodule/employee.js');
var acgroup = require('../appmodule/acgroup.js');
var bankrecipt = require('../appmodule/bankreciept.js');
var bankPayment = require('../appmodule/bankpayment.js');
var itemsmaster= require('../appmodule/itemsmaster.js');

/* Route.js */

var appRouter = function(app) {
    //############# API Details 
    var APIInfo = {
        ver: "1.0",
        type: "REST API",
        requestdata: "JSON",
        responsedata: "JSON",
    }
    //#############################################################################################

    //#############################################################################################

    //#################### Login / ##########################
    app.post("/getLogin", user.getLogin);
    //#############################################################################################

    //#################### Common / ##########################
    app.post("/getAutoData", common.getAutoData);
    app.post("/getMOM", common.getMOM);
    app.post("/saveMOM", common.saveMOM);
    //#############################################################################################

    //#################### Employee / ##########################
    app.post("/getEmployee", emp.getEmployee);
    app.post("/saveEmployee", emp.saveEmployee);
    //#############################################################################################

    //#################### Ac Group / ##########################
    app.post("/getAcgroup", acgroup.getAcgroup);
    app.post("/saveAcgroup",acgroup.saveAcgroup);
    app.post("/getApplicableFrom",acgroup.getApplicableFrom);
    //#############################################################################################

    //#################### Head Menu / ##########################
    app.post("/getMenuHead", headmenu.getMenuHead);
    //#############################################################################################
    
    //#################### Head Menu / ##########################
    app.post("/getMenu", headmenu.getMenu);
    //#############################################################################################

     //#################### Bank Reciept / ##########################
    app.post("/getBankMaster", bankrecipt.getBankMaster);
    app.post("/savebankreciept", bankrecipt.savebankreciept);
    //#############################################################################################

     //#################### Bank Payment / ##########################
    app.post("/getBankMaster", bankPayment.getBankMaster);
    app.post("/savebankpayment", bankPayment.savebankpayment);
    app.post("/getBankPayview", bankPayment.getBankPayview);
    //#############################################################################################

    //#################### items Master / ##########################
    app.post("/saveItemsMaster", itemsmaster.saveItemsMaster);
    //#############################################################################################

    //#################### API TEST / ##########################
}

module.exports = appRouter;