sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Application.VizFrame.controller.SaveChart", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Application.VizFrame.view.SaveChart
		 */
		onInit: function () {
			var oVizFrame2 = this.getView().byId("idVizFrame22");
			oVizFrame2.setVizProperties({
				title: {
					visible: "true",
					text: "VizFrame Chart Bar"
				}
			});

			var oVizFrame3 = this.getView().byId("idVizFrame33");
			oVizFrame3.setVizProperties({
				title: {
					visible: "true",
					text: "VizFrame Chart Donut"
				}
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Application.VizFrame.view.SaveChart
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Application.VizFrame.view.SaveChart
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Application.VizFrame.view.SaveChart
		 */
		//	onExit: function() {
		//
		//	}

	});

});