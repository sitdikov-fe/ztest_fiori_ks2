sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast){
    "use strict";
    var oModel;
    var userdata;
    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        onInit: function() {
            oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_FIORI_KOSI_SRV/", true);
            this.getView().byId("oSelectData").setModel(oModel);
          },
          onAddRow:  function() {
            var readurl = "/ztestStr001Set";
			oModel.read(readurl, {
				success : function(oData, oResponse) {

                    console.log(oData);
                    // this.getView().byId("oSelectData").setModel(oModel);
                    // this.getView().byId("oSelectData").setModel(oModel, "userdata");
                    // this.getView().byId("oSelectData").getModel().refresh(true);
                    this.getView().byId("oSelectData").setValue(oData);
        			// sap.ui.getCore().setModel(userdata, "data");
        			// this.getView().byId("oNameOrg").setValue(oData.valueOf().NameOrg);
					
				}.bind(this)
			});
          }
    });
});