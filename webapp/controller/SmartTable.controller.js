sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel){
    "use strict";
    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        onInit: function() {
            oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_FIORI_KOSI_SRV/", true);
			this.getView().byId("oSelectClient").setModel(oModel);
          }
    });
});