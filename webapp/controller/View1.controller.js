sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("IndianStates.ComboBox.indianstates.controller.View1", {
            onInit: function () {

            },
            dispay : function()
            {
                var state=this.getView().byId("ip").getValue();
                if (state!="")
                {
                    this.getView().byId("op").setText("Your Selection State is : "+state);
                } else
                {
                    this.getView().byId("op").setText("");
                }
                
            }
        });
    });
