/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductList
define('ProductDetails.WebSelections.Model'
,	[	'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		_
	,	Backbone
	)
{
	'use strict';

	// @class ProductList.Model Model for handling Product Lists (CRUD) @extends Backbone.Model
	return Backbone.Model.extend(
	{
		urlRoot: _.getAbsoluteUrl('services/ProductDetails.WebSelections.Service.ss')

		// redefine url to avoid possible cache problems from browser
	,	url: function()
		{
			var base_url = Backbone.Model.prototype.url.apply(this, arguments)
			,	url_params = { t: new Date().getTime() };

			return _.addParamsToUrl(base_url, url_params);
		}

	,	initialize: function (attributes)
		{
		}
	});
});
