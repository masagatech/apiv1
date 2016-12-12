var auth = require('../appmodule/auth.js');
var category = require('../appmodule/category.js');
var items = require('../appmodule/items.js');
var mastr = require('../appmodule/mastofmast.js');
// var kot = require('../appmodule/kot.js');
var order = require('../appmodule/order.js');
var bill = require('../appmodule/bill.js');
var appsettings = require('../appmodule/appsetings.js');
var discount = require('../appmodule/discount.js');
var tables = require('../appmodule/tables.js');
var menus = require('../appmodule/menus.js');
var users = require('../appmodule/users.js');
//reports
var rptSalesRpt = require('../appmodule/reports/salesrpt.js');
var rptItemsRpt = require('../appmodule/reports/itemsrpt.js');

var appRouter = function(app) {
    //############# API Details 
    var APIInfo = {
            ver: "1.0",
            type: "REST API",
            requestdata: "JSON",
            responsedata: "JSON",
        }
        //#############################################################################################
        //#################### API TEST /  ##########################	
        //#############################################################################################
    app.get("/", function(req, res, next) {
        res.send(JSON.stringify(APIInfo));
    });

    //#############################################################################################
    //#################### API Authentication /  ##########################	

    app.get("/login", auth.login);

    //#############################################################################################
    //#################### Category /  ##########################	

    app.post("/getCat", category.getCat);
    app.post("/getCatGrid", category.getCatGrid);
    app.post("/createCat", category.createCategory);

    //#############################################################################################
    //#################### Items /  ##########################	

    app.post("/getItems", items.getItems);
    app.post("/getItemGrid", items.getItemsGrid);
    app.post("/getSideItems", items.getSideItems);
    app.post("/getComboItems", items.getComboItems);
    app.post("/createItems", items.createItems);
    app.post("/createCombo", items.createCombo);
    app.post("/getComboGrid", items.getComboGrid);


    //#############################################################################################
    //#################### Master of Master /  ##########################	

    app.post("/getMastOfMast", mastr.getMastofMast);
    app.post("/createMastofMast", mastr.createMastofMast);
    app.post("/getMastersGrid", mastr.getMastersGrid);

    //#############################################################################################
    //#################### KOT /  ##########################	

    // app.post("/insertKot", kot.insertKot);
    // app.post("/printKot", kot.printKot);

    //#############################################################################################
    //#################### App settings /  ##########################	

    app.post("/getAppSetting", appsettings.getAppSetting);

    app.post("/saveAppSetting", appsettings.saveAppSetting);

    app.post("/getSetting", appsettings.getAppSetting_A);
    //#############################################################################################
    //#################### Order /  ##########################	

    app.post("/insertOrder", order.insertOrder);
    app.post("/getOrder", order.getOrder);
    app.post("/getOrderGrid", order.getOrderGrid);

    //#############################################################################################
    //#################### Bill /  ##########################	

    app.post("/insertBill", bill.createBill);

    //#############################################################################################
    //#################### Discount /  ##########################	

    app.post("/createDiscount", discount.createDiscount);
    app.post("/getDiscount", discount.getDiscount);
    app.post("/getDiscountGrid", discount.getDiscountGrid);

    //#############################################################################################
    //#################### Tables /  ##########################	

    app.post("/getTables", tables.getTables);

    //#############################################################################################
    //#################### Menus /  ##########################	

    app.post("/getMenus", menus.getMenus);

    //#############################################################################################
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  REPORTS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //#################### Menus /  ##########################	

    app.post("/getSalesReports", rptSalesRpt.getSalesReports);
    app.post("/getItemsReports", rptItemsRpt.getItemsReports);

    //#############################################################################################
    //#################### Menus /  ##########################	

    app.post("/getUserGrid", users.getUserGrid);
    app.post("/getUserDetails", users.getUserDetails);
    app.post("/saveUserDetails", users.saveUserDetails);

    //#############################################################################################

    //#################### API TEST /  ##########################	
}

module.exports = appRouter;