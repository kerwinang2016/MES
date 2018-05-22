/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Address
define('ProductDetails.WebFilters.Collection'
,	[	'ProductDetails.WebFilters.Model'
	, 'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		WebFiltersModel
	,	_
	,	Backbone
	,	Utils
	)
{
	'use strict';

	return Backbone.Collection.extend(
	{
		// @property {String} urlRoot
		urlRoot: _.getAbsoluteUrl('services/ProductDetails.WebFilters.Service.ss')
		, url: function()
		{
			return this.urlRoot ;
		}
		, initialize: function(options){
			//this.itemsIds = _.isArray(options.itemsIds) ? _.sortBy(options.itemsIds, function (id){return id;}) : [options.itemsIds];
		}
		//@method fetchItems @return {jQuery.Deferred}
	,	fetchItems: function ()
		{
			return this.fetch({data:{id: this.itemsIds.join(',')}});
		}

	});
});
