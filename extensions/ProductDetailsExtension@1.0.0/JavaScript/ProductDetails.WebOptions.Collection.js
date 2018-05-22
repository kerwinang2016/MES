/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Address
define('ProductDetails.WebOptions.Collection'
,	[	'ProductDetails.WebOptions.Model'
	, 'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		WebOptionsModel
	,	_
	,	Backbone
	,	Utils
	)
{
	'use strict';

	return Backbone.Collection.extend(
	{
		// @property {String} urlRoot
		urlRoot: _.getAbsoluteUrl('services/ProductDetails.WebOptions.Service.ss')
		, url: function()
		{
			return this.urlRoot;
		}
		, initialize: function(options){
			this.itemsIds = options.itemsIds;
		}
		//@method fetchItems @return {jQuery.Deferred}
	,	fetchItems: function ()
		{
			return this.fetch({data:{id: this.itemsIds}});
		}

	});
});
