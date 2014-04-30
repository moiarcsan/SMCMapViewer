require("./Layer.js");
require("./reloaders/LayerReloader.js");

/**
 * Base class for all SMC viewer layer which are both reloadable and aggregable in grouping layers.
 * @class
 * @extends SMC.layers.Layer
 * @abstract
 * @mixes SMC.layers.reloaders.LayerReloader
 *
 * @author Luis Román (lroman@emergya.com)
 */
SMC.layers.SingleLayer = SMC.layers.Layer.extend(
    /** @lends SMC.layers.geometry.Layer# */
    {
        includes: SMC.Util.deepClassInclude([SMC.layers.reloaders.LayerReloader]),

        /**
    	 * Initialize the object with the params
    	 * @param {object} options - object with need parameters
    	 */
    	initialize: function(options) {
    	    L.Util.setOptions(this, options);
    	    SMC.layers.Layer.prototype.initialize.call(this, options);
   		},

        onAdd: function(map) {
        	this.load();
        }
    });
