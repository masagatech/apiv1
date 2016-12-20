    var items = require('../appmodule/items.js');
    var menu = require('../appmodule/menu.js');
    var common = require('../appmodule/common.js');
    var fy = require('../appmodule/fy.js');
    var user = require('../appmodule/user.js');
    var ur = require('../appmodule/userrights.js');
    var emp = require('../appmodule/employee.js');
    var company = require('../appmodule/company.js');
    var jv = require('../appmodule/jv.js');
    var debitnote = require('../appmodule/debitnote.js');
    var pdc = require('../appmodule/pdc.js');
    var acgroup = require('../appmodule/acgroup.js');

    var bankrecipt = require('../appmodule/bankreciept.js');
    var bankPayment = require('../appmodule/bankpayment.js');
    var itemsmaster = require('../appmodule/itemsmaster.js');

    var appRouter = function(app) {
        //#################### API Details / ##########################
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
        app.post("/getLogout", user.getLogout)
            //#############################################################################################

        //#################### Menu / ##########################
        app.post("/getMenuHead", menu.getMenuHead);
        app.post("/getMenuDetails", menu.getMenu);
        //#############################################################################################

        //#################### User / ##########################
        app.post("/getUsers", user.getUsers);
        app.post("/saveUsers", user.saveUsers);
        app.post("/savePassword", user.savePassword);
        //#############################################################################################

        //#################### User Rights / ##########################
        app.post("/getUserRights", ur.getUserRights);
        app.post("/saveUserRights", ur.saveUserRights);
        //#############################################################################################

        //#################### Common / ##########################
        app.post("/getAutoData", common.getAutoData);
        app.post("/getMOM", common.getMOM);
        app.post("/saveMOM", common.saveMOM);
        //#############################################################################################

        //#################### FY / ##########################
        app.post("/getfy", fy.getfy);
        app.post("/savefy", fy.savefy);
        //#############################################################################################

        //#################### Employee / ##########################
        app.post("/getEmployee", emp.getEmployee);
        app.post("/saveEmployee", emp.saveEmployee);
        //#############################################################################################

        //#################### Company / ##########################
        app.post("/getCompany", company.getCompany);
        app.post("/saveCompany", company.saveCompany);
        //#############################################################################################

        //#################### JV / ##########################
        app.post("/getjv", jv.getjv);
        app.post("/savejv", jv.savejv);
        //#############################################################################################

        //#################### Debit Note / ##########################
        app.post("/getDebitNote", debitnote.getDebitNote);
        app.post("/saveDebitNote", debitnote.saveDebitNote);
        //#############################################################################################
        //#################### PDC / ##########################
        app.post("/getpdc", pdc.getpdc);
        app.post("/savepdc", pdc.savepdc);
        //#############################################################################################
        //#################### Ac Group / ##########################
        app.post("/getAcgroup", acgroup.getAcgroup);
        app.post("/getApplicableFrom", acgroup.getApplicableFrom);
        app.post("/saveAcgroup", acgroup.saveAcgroup);
        //#############################################################################################

        //#################### Bank Reciept / ##########################
        app.post("/getBankMaster", bankrecipt.getBankMaster);
        app.post("/savebankreciept", bankrecipt.savebankreciept);
        app.post("/getbankreciptview", bankrecipt.getbankreciptview);
        //#############################################################################################

        //#################### Bank Payment / ##########################
        app.post("/getBankMaster", bankPayment.getBankMaster);
        app.post("/savebankpayment", bankPayment.savebankpayment);
        app.post("/getBankPayview", bankPayment.getBankPayview);
        //#############################################################################################

        //#################### items Master / ##########################
        app.post("/saveItemsMaster", itemsmaster.saveItemsMaster);
        app.post("/getItemsMaster", itemsmaster.getItemsMaster);
        //#############################################################################################

        //#################### API TEST / ##########################
    }



    module.exports = appRouter;