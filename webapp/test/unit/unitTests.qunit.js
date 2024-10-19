/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"IndianStatesComboBox/indianstates/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
