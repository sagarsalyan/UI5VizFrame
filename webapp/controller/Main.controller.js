sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Application.VizFrame.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Application.VizFrame.view.Main
		 */
		onInit: function () {
			debugger;
			var oVizFrame=this.getView().byId("idVizFrame");
			var oDataset=new sap.viz.ui5.data.FlattenedDataset({
				dimensions:[{
					name:"Model",
					value:"{chartModel>Brand}"
				}],
				measures:[{
					name:"Cars Bought",
					value:"{chartModel>Value}"
				}],
				data:{
					path:"chartModel>/Cars"
				}
			});
			oVizFrame.removeAllFeeds();
			oVizFrame.setDataset(oDataset);
			oVizFrame.setVizType('bar');
			var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            // oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
			//Set VizProperties
			oVizFrame.setVizProperties({
				plotArea:{
					colorPalatte:d3.scale.category20().range()
				},
				title:{
					visible:"true",
					text:"VizFrame Chart"
				}
			});
			
			var feedValueAxis=new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid':"valueAxis",
				'type':"Measure",
				'values':["Cars Bought"]
			});
			var feedCategoryAxis=new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid':"categoryAxis",
				'type':"Dimension",
				'values':["Model"]
			});
			
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			
			
			
			//Title
			var oVizFrame2=this.getView().byId("idVizFrame2");
			oVizFrame2.setVizProperties({
				title:{
					visible:"true",
					text:"VizFrame Chart Bar"
				}
			});
			
			var oVizFrame3=this.getView().byId("idVizFrame3");
			oVizFrame3.setVizProperties({
				title:{
					visible:"true",
					text:"VizFrame Chart Donut"
				}
			});
			
			var oVizFrame4=this.getView().byId("idVizFrame4");
			
			oVizFrame4.setVizProperties({
				legend: {
                    title: {
                        visible: false
                    }
                },
				title:{
					visible:"true",
					text:"VizFrame Chart Pie"
				}
			});
			
			var oVizFrame5=this.getView().byId("idVizFrame5");
			oVizFrame5.setVizProperties({
				title:{
					visible:"true",
					text:"VizFrame Chart Scatter"
				}
			});
			
			
			
			//dual bar
			this.getView().byId("oVizFrame").setVizProperties({
				interaction: {
					selectability: {
						mode: 'NONE'
					}
				},
				plotArea: {
					dataPointSize: {
						min: 40,
					},
					dataLabel: {
						visible: true,
						type: 'value',
						style: {
							fontWeight: 'bold'
						}
					},
					gridline: {
						visible: false
					},
					drawingEffect: 'glossy',
					// colorPalette: d3.scale.category20().range()
					colorPalette: ['#009dff', '#ff9900']
				},
				title: {
					visible: true,
					text: "Books"
				},
				categoryAxis: {
					label: {
						style: {
							fontWeight: 'bold'
						}
					},
					title: {
						style: {
							fontWeight: 'bold'
						}
					}
				},
				valueAxis: {
					label: {
						style: {
							fontWeight: 'bold'
						}
					},
					title: {
						style: {
							fontWeight: 'bold'
						}
					}
				},
				valueAxis2: {
					label: {
						style: {
							fontWeight: 'bold'
						}
					},
					title: {
						style: {
							fontWeight: 'bold'
						}
					}
				}
			});
			//dual bar
			
			
			
			
			// Custom data in popover
			var idPopOverCustom = this.getView().byId("idPopOverCustom");
			idPopOverCustom.setCustomDataControl(function (data) {
				debugger
				var selectedLevel = data.data.val.find(d => d.id === "_context_row_number").value;
				var selectedData = this.getOwnerComponent().getModel("chartModel").getProperty("/Book")[selectedLevel];
				var selectedColor = data.data.color;
				var divStr = "";
				var svg =
					`<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='${selectedColor}' transform='translate(5,5)'></path></svg>`;
				divStr = divStr + "<div style = 'margin: 15px 30px 0 10px'>" + svg + "<b style='margin-left:10px'>" + selectedData.City +
					"</b></div>";
				divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>Profit<span style = 'float: right'>" + selectedData.Profit +
					"</span></div>";
				divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>Revenue<span style = 'float: right'>" + selectedData.Revenue +
					"</span></div>";
				divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'>Units Sold<span style = 'float: right'>" + selectedData["Units Sold"] +
					"</span></div>";
				return new sap.ui.core.HTML({
					content: divStr
				});
			}.bind(this));
			idPopOverCustom.connect(this.getView().byId("idVizFrameCustom").getVizUid());
			
			// Custom data in popover
			
			
			
			
		},
		onSecondPress:function(){
			var route = new sap.ui.core.UIComponent.getRouterFor(this);
			route.navTo("SaveChart", true);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Application.VizFrame.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Application.VizFrame.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Application.VizFrame.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});