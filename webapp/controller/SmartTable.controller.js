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
					var oModelMNA = new JSONModel();
					oModelMNA.setData(oData.results);
					this.getView().setModel(oModelMNA, "oModelMNA");
					
				}.bind(this)
			});
          },
          onInitialise: function (oEvent) {

			var oTable = oEvent.getSource().getTable();
			var aColumns = oTable.getColumns();

			for (var i = 0; i < aColumns.length; i++) {
				var sPath = "oModelMNA>" + aColumns[i].data("p13nData").columnKey;
				aColumns[i].getTemplate().getDisplay().bindText(sPath);
				aColumns[i].getTemplate().getEdit().bindValue(sPath);
			}

			oTable.bindRows("oModelMNA>/");
		}
    });
});