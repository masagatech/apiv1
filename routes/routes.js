var items = require('../appmodule/items.js');


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
    //#################### Items /  ##########################	

    app.post("/getItems", items.getItems);
    app.post("/getItemGrid", items.getItemsGrid);
    app.post("/getSideItems", items.getSideItems);
    app.post("/getComboItems", items.getComboItems);
    app.post("/createItems", items.createItems);
    app.post("/createCombo", items.createCombo);
    app.post("/getComboGrid", items.getComboGrid);


    //#############################################################################################

    //#################### API TEST /  ##########################	
}

module.exports = appRouter;