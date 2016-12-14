var items = require('../appmodule/items.js');
var headmenu = require('../appmodule/menu.js');
var common = require('../appmodule/common.js');
var user = require('../appmodule/user.js');
var emp = require('../appmodule/employee.js');
var acgroup = require('../appmodule/acgroup.js');

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
    //#############################################################################################

    //#################### Head Menu / ##########################
    app.post("/getMenuHead", headmenu.getMenuHead);
    //#############################################################################################
    
    //#################### Head Menu / ##########################
    app.post("/getMenu", headmenu.getMenu);
    //#############################################################################################

    //#################### API TEST / ##########################
}

module.exports = appRouter;