    var valid = require('../appmodule/validation.js');
    var items = require('../appmodule/items.js');
    var menu = require('../appmodule/menu.js');
    var common = require('../appmodule/common.js');
    var fy = require('../appmodule/fy.js');
    var dynflds = require('../appmodule/dynamicfields.js');
    var user = require('../appmodule/user.js');
    var ur = require('../appmodule/userrights.js');
    var emp = require('../appmodule/employee.js');
    var dr = require('../appmodule/empdocrepo.js');
    var company = require('../appmodule/company.js');
    var jv = require('../appmodule/jv.js');
    var debitnote = require('../appmodule/debitnote.js');
    var pdc = require('../appmodule/pdc.js');
    var rb = require('../appmodule/receiptbook.js');
    var budget = require('../appmodule/budget.js');
    var expensectrlcentermap = require('../appmodule/expensectrlcentermap.js');
    var expensevoucher = require('../appmodule/expensevoucher.js');
    var expensebudget = require('../appmodule/expensebudget.js');

    var acgroup = require('../appmodule/acgroup.js');
    var bankreceipt = require('../appmodule/bankreciept.js');
    var bankPayment = require('../appmodule/bankpayment.js');
    var itemsmaster = require('../appmodule/itemsmaster.js');
    var purchaseord = require('../appmodule/purchaseorder.js');
    var attribute = require('../appmodule/attribute.js');
    var ctrlcenter = require('../appmodule/ctrlcenter.js');
    var attach = require('../appmodule/attach.js');
    var fileupload = require('../appmodule/fileupload.js');
    var adrbok = require('../appmodule/addressbook.js');
    var sale = require('../appmodule/saleorder.js');
    var warehouse = require('../appmodule/warehouse.js');
    var customer = require('../appmodule/customer.js');
    var vendor = require('../appmodule/vendor.js');
    var warehousetranf = require('../appmodule/warehousetransfer.js');
    var wareopenibgstok = require('../appmodule/wareopeningstock.js');
    var transpoter = require('../appmodule/transpoter.js');
    var auditlock = require('../appmodule/auditlock.js');
    var invtorylocal = require('../appmodule/invlocation.js');
    var material = require('../appmodule/materialmaster.js');

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

        //#################### VIVEK / ##########################

        //#################### Validation / ##########################
        app.post("/checkFormValid", valid.checkFormValid);
        app.post("/checkDateValid", valid.checkDateValid);
        //#############################################################################################

        //#################### Login / ##########################
        app.post("/getLogin", user.getLogin);
        app.post("/getLogout", user.getLogout)
        //#############################################################################################

        //#################### Menu / ##########################
        app.post("/getMenuHead", menu.getMenuHead);
        app.post("/getMenuDetails", menu.getMenuDetails);
        app.post("/getMenuAccess", menu.getMenuAccess);
        //#############################################################################################

        //#################### Expense Budget /  ##########################	
        app.post("/getDynamicFields", dynflds.getDynamicFields);
        app.post("/saveDynamicFields", dynflds.saveDynamicFields);
        //#############################################################################################

        //#################### User / ##########################
        app.post("/getUsers", user.getUsers);
        app.post("/saveUsers", user.saveUsers);
        app.post("/savePassword", user.savePassword);
        app.post("/saveSettings", user.saveSettings);
        app.post("/getSettings", user.getSettings);

        //#############################################################################################

        //#################### User Rights / ##########################
        app.post("/getUserRights", ur.getUserRights);
        app.post("/saveUserRights", ur.saveUserRights);
        //#############################################################################################

        //#################### Common / ##########################
        app.post("/getAutoData", common.getAutoData);
        app.post("/checkValidate", common.checkValidate);

        app.post("/getMOM", common.getMOM);
        app.post("/getMOMGrid", common.getMOMGrid);
        app.post("/saveMOM", common.saveMOM);
        app.post("/getOtherDetails", common.getOtherDetails);
        app.post("/getisproceed", common.getisproceed);
        //#############################################################################################

        //#################### FY / ##########################
        app.post("/getfy", fy.getfy);
        app.post("/savefy", fy.savefy);
        //#############################################################################################

        //#################### Employee / ##########################
        app.post("/getEmployee", emp.getEmployee);
        app.post("/saveEmployee", emp.saveEmployee);
        //#############################################################################################

        //#################### Document Repository / ##########################
        app.post("/getEmpDocRepo", dr.getEmpDocRepo);
        app.post("/saveEmpDocRepo", dr.saveEmpDocRepo);
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

        //#################### Bank Reciept / ##########################
        app.post("/getBankMaster", bankreceipt.getBankMaster);
        app.post("/getBankReceipt", bankreceipt.getBankReceipt);
        app.post("/saveBankReceipt", bankreceipt.saveBankReceipt);
        //#############################################################################################

        //#################### Bank Payment / ##########################
        app.post("/getBankMaster", bankPayment.getBankMaster);
        app.post("/getBankPayment", bankPayment.getBankPayment);
        app.post("/saveBankPayment", bankPayment.saveBankPayment);
        //#############################################################################################

        //#################### PDC / ##########################
        app.post("/getpdc", pdc.getpdc);
        app.post("/savepdc", pdc.savepdc);
        //#############################################################################################

        //#################### Receipt Book / ##########################
        app.post("/getAllRB", rb.getAllRB);
        app.post("/getRBDetails", rb.getRBDetails);
        app.post("/saveReceiptBook", rb.saveReceiptBook);
        //#############################################################################################

        //#################### Receipt Book Issued / ##########################
        app.post("/getAllRBI", rb.getAllRBI);
        app.post("/getRBIDetails", rb.getRBIDetails);
        app.post("/saveRBIDetails", rb.saveRBIDetails);
        //#############################################################################################
        
        //#################### Expense Control Center Mapping /  ##########################	
        app.post("/getAllExpenseCtrlMap", expensectrlcentermap.getAllExpenseCtrlMap);
        app.post("/getExpenseCtrlMap", expensectrlcentermap.getExpenseCtrlMap);
        app.post("/saveExpenseCtrlMap", expensectrlcentermap.saveExpenseCtrlMap);
        //#############################################################################################

        //#################### Expense Voucher /  ##########################	
        app.post("/getAllExpenseVoucher", expensevoucher.getAllExpenseVoucher);
        app.post("/getExpenseVoucherDetails", expensevoucher.getExpenseVoucherDetails);
        app.post("/saveExpenseVoucher", expensevoucher.saveExpenseVoucher);
        //#############################################################################################

        //#################### Budget /  ##########################
        app.post("/getBudget", budget.getBudget);
        app.post("/saveBudget", budget.saveBudget);
        //#############################################################################################

        //#################### Expense Budget /  ##########################
        app.post("/getAllExpenseBudget", expensebudget.getAllExpenseBudget);
        app.post("/getExpenseBudgetDetails", expensebudget.getExpenseBudgetDetails);
        app.post("/saveExpenseBudget", expensebudget.saveExpenseBudget);
        //#############################################################################################

        //#################### File Uploads /  ##########################	

        app.post("/getAttach", attach.getAttach);
        app.post("/saveAttach", attach.saveAttach);
        app.post("/upload", fileupload.uploadFile);

        //#############################################################################################

        //#################### Audit Lock / ##########################
        app.post("/getAuditLockSetting",auditlock.getAuditLockSetting);
        app.post("/saveAuditLockAction",auditlock.saveAuditLockAction);
        //#############################################################################################

        //#################### VIVEK / ##########################

        //#################### ZAID / ###########################

        //#################### Ac Group / ##########################
        app.post("/getAcgroup", acgroup.getAcgroup);
        app.post("/getApplicableFrom", acgroup.getApplicableFrom);
        app.post("/saveAcgroup", acgroup.saveAcgroup);
        //#############################################################################################

        //#################### items Master / ##########################
        app.post("/saveItemsMaster", itemsmaster.saveItemsMaster);
        app.post("/getItemsMaster", itemsmaster.getItemsMaster);
        app.post("/getdoprodwn", itemsmaster.getdoprodwn);
        //#############################################################################################

        //#################### Purchase Order / ##########################
        app.post("/savePurchaseOrder", purchaseord.savePurchaseOrder);
        app.post("/getitemsDetails", purchaseord.getitemsDetails);
        //#############################################################################################

        //#################### Attribute / ##########################
        app.post("/saveAttribute", attribute.saveAttribute);
        app.post("/getAttribute", attribute.getAttribute);
        //#############################################################################################

        //#################### Controlling Center / ##########################
        app.post("/saveCtrlcenter", ctrlcenter.saveCtrlcenter);
        app.post("/getCtrlcenter", ctrlcenter.getCtrlcenter);
        //#############################################################################################

        //#################### Address Book / ##########################
        app.post("/saveAddress", adrbok.saveAddress);
        app.post("/getAddress", adrbok.getAddress);
        //#############################################################################################

        //#################### DC Master / ##########################
        app.post("/salesorderdetails", sale.salesorderdetails);
        app.post("/getdcitemsdetails", sale.getdcitemsdetails);
        app.post("/saveDcMaster", sale.saveDcMaster);
        app.post("/getdcdetails", sale.getdcdetails);
        //#############################################################################################

        //#################### Warehouse Master / ##########################
        app.post("/saveWarehouse",warehouse.saveWarehouse);
        app.post("/getwarehouse",warehouse.getwarehouse);
        //#############################################################################################

         //#################### Customer Master / ##########################
        app.post("/saveCustomer",customer.saveCustomer);
        app.post("/getcustomerdrop",customer.getcustomerdrop);
        app.post("/getcustomer",customer.getcustomer);
        app.post("/getctrldetails",customer.getctrldetails);
        //#############################################################################################

        //#################### Vendor Master / ##########################
        app.post("/saveVendor",vendor.saveVendor);
        app.post("/getvendordrop",vendor.getvendordrop);
        app.post("/getvendor",vendor.getvendor);
        //#############################################################################################

        //#################### Warehouse Transfer / ##########################
        app.post("/saveWarehouseTranf",warehousetranf.saveWarehouseTranf);
        app.post("/getwarehouseTransfer",warehousetranf.getwarehouseTransfer);
        //#############################################################################################

        //#################### Warehouse opening stock / ##########################
        app.post("/getopeningstock",wareopenibgstok.getopeningstock);
        app.post("/saveWareOpeningStock",wareopenibgstok.saveWareOpeningStock);
        //#############################################################################################

        //#################### Transpoter Master / ##########################
        app.post("/getTranspoter",transpoter.getTranspoter);
        app.post("/saveTranspoter",transpoter.saveTranspoter);
        //#############################################################################################
        
        //#################### Inventroy Location / ##########################
        app.post("/Inventoryloc",invtorylocal.Inventoryloc);
        app.post("/saveLocation",invtorylocal.saveLocation);
         app.post("/getInventoryloc",invtorylocal.getInventoryloc);
        //#############################################################################################

        //#################### Inventroy Location / ##########################
        app.post("/savematerialMaster",material.savematerialMaster);
        app.post("/getmaterialMaster",material.getmaterialMaster);
         //#############################################################################################
        //#################### ZAID / ###########################

        //#################### API TEST / ##########################
    }

    module.exports = appRouter;