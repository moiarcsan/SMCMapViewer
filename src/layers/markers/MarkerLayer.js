require("./markers.js");
require("../stylers/MarkerCssStyler.js");
require("../SingleLayer.js");
require("../../../lib/leaflet.markercluster/dist/leaflet.markercluster.js");

/**
 * Base layer for all SMC map viewer's layers rendered using markers.
 * @class
 * @abstract 
 * @mixes SMC.layers.SingleLayer
 */
SMC.layers.markers.MarkerLayer = L.MarkerClusterGroup.extend(
/** @lends SMC.layers.markers.MarkerLayer# */
{
	includes: [SMC.layers.SingleLayer, SMC.layers.stylers.MarkerCssStyler]
});