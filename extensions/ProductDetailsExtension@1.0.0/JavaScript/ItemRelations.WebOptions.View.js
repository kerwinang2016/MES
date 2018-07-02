/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ItemViews
define(
	'ItemRelations.WebOptions.View'
,	[
		'Backbone.CompositeView'
	,	'ProductDetails.WebSelections.Model'
	,	'product_details_weboptions_item.tpl'

	,	'Backbone'
	]
,	function (
		BackboneCompositeView
	,	ProductDetailsWebSelectionsModel
	,	product_details_weboptions_item_tpl

	,	Backbone
	)
{
	'use strict';

	// @class ItemViews.RelatedItem.View Responsible for rendering an item details. The idea is that the item rendered is related to another one in the same page
	// @extend Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: product_details_weboptions_item_tpl

		//@method initialize Override default method to make this view composite
		//@param {ItemViews.RelatedItem.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function ()
		{
			Backbone.View.prototype.initialize.apply(this, arguments);
			BackboneCompositeView.add(this);
			this.parentView = this.options.parentView;
			var productModel = this.parentView.parentView.model;
			var productOptions = productModel.get('options').models;
			var priceOptionJSON = _.find(productOptions,function(model){
				return model.get('cartOptionId') == "custcol_custom_options_json";
			})
			var priceOptionJSON1 = _.find(productOptions,function(model){
				return model.get('cartOptionId') == "custcol_custom_options_json1";
			})
			var priceOptionJSON2 = _.find(productOptions,function(model){
				return model.get('cartOptionId') == "custcol_custom_options_json2";
			})
			var priceOptionJSON3 = _.find(productOptions,function(model){
				return model.get('cartOptionId') == "custcol_custom_options_json3";
			})
			var priceOptionJSON4 = _.find(productOptions,function(model){
				return model.get('cartOptionId') == "custcol_custom_options_json4";
			})
			this.model.showOption = this.model.get('custrecord_wo_donotshowbydefault') == 'T'?false:true;

			if(priceOptionJSON && priceOptionJSON.get('value') && priceOptionJSON.get('value').internalid){
				var oj = priceOptionJSON.get('value').internalid
				if(priceOptionJSON1)
					oj += priceOptionJSON1.get('value').internalid
				if(priceOptionJSON2)
						oj += priceOptionJSON2.get('value').internalid
				if(priceOptionJSON3)
						oj += priceOptionJSON3.get('value').internalid
				if(priceOptionJSON4)
						oj += priceOptionJSON4.get('value').internalid
				oj = JSON.parse(oj);
				if(oj.length>0){
					for(var i=0;i<oj.length;i++){

						if(oj[i].id == this.model.get('internalid')){
							this.model.showOption = true;
							if(oj[i].selection){
								for(var j=0;j<oj[i].selection.length;j++){
									var x = _.find(this.model.get('selections'),function(o){return o.internalid == oj[i].selection[j].value.toString();});
									if(x) {
										x.selected = true;}
								}
							}
							if(oj[i].text)
								this.model.text = oj[i].text;
						}
					}
				}
			}
		}
	, events:{
		'change .product-custom-option':'updateItem'
	}
	,	contextData: {
			'item': function ()
			{
				return this.model;
			}
		}

	,	childViews: {
		}
	, getOptionsDetails: function getOptionsDetails(){
		//Option:amount
		//[{Option:optionname,value:amount}]
		var selections= this.model.get('selections');
		var filters= this.model.get('filters');
		var jsontext= [];
		var weboptions = $('.weboption .product-custom-option');

		weboptions.each(function(index){
			var self = this;
			console.log(self)
			if($(this).prop('type') == 'select-one'){
				if($(this).val() != ''){
					var sel_id = $(this.selectedOptions).val();
					var price = $(this.selectedOptions).data().price;
					var sku = $(this.selectedOptions).data().sku;
					// var selected = _.find(selections,function(selection){
					// 	return selection.internalid == sel_id;
					// });
					var r;
					if(jsontext.length>0)
					r = _.find(jsontext,function(o){
						return o.id == $(self).data().option;
					});
					if(r){
						r.selection.push({
							option:$(this).data().option,
							value:sel_id,
							price:price?price:0,
							sku:sku
						});
					}else{
						jsontext.push({
							id:$(this).data().option,
							shipoption:$(this).data().shipping,
							selection:[{
								option:$(this).data().option,
								value:sel_id,
								price:price?price:0,
								sku:sku
							}]
						});
					}
				}
			}
			else if($(this).prop('type') == 'text'){
				if($(this).val() != ''){
					jsontext.push({
						id:$(this).data().option,
						text:$(this).val()
					});
				}
			}
			else if($(this).prop('type') == 'checkbox'){
				if($(this).prop('checked')){
					var sel_id = $(this).data().selection;
					// var selected = _.find(selections,function(selection){
					// 	return selection.internalid == sel_id;
					// });
					var r;
					if(jsontext.length>0)
					r = _.find(jsontext,function(o){
						return o.id == $(self).data().option;
					});
					if(r){
						r.selection.push({
							option:$(this).data().option,
							value:$(this).data().selection,
							price:$(this).data().price,
							sku:$(this).data().sku
						});
					}
					else{
						jsontext.push({
							id:$(this).data().option,
							shipoption:$(this).data().shipping,
							selection:[{
								option:$(this).data().option,
								value:$(this).data().selection,
								price:$(this).data().price,
								sku:$(this).data().sku
							}]
						});
					}
				}
			}
		});
		return { jsontext:jsontext}
	}
	, computeWebsiteOptions: function computeWebsiteOptions(){
		var amount = 0;
		var selectrequired = $('.weboption select');

		selectrequired.each(function(index){
			if($(this).data().shipping == 'T'){}
			else if($(this).val() != ''){
				var sel_id = $(this).val()
				var price = $(this.selectedOptions).data().price;
				if(price){
					amount+= parseFloat(price);
				}
			}
		});
		var ulrequired = $('.weboption ul');
		ulrequired.each(function(index){
			if($(this).data().shipping == 'T'){}
			else{
				var a = $(this).find('.product-custom-option:checked');
				if(a.length>0){
					for(var i=0;i<a.length;i++){
						var price = $(a[i]).data().price;
						if(price){
							amount+= parseFloat(price);
						}
				}
			}
		}
		});
		return amount;
	}
	, getSelectedOptions:function(){
		/*
		[{option, selectedselections, available_selections_upon_filter, filteredOptions{option,selections}}]
		*/
		var returnObj = [];
		var weboptions = $('.weboption .product-custom-option');
		weboptions.each(function(index){
			if($(this).prop('type') == 'select-one'){
				if($(this).val() != ''){
					var currentSelection = $(this.selectedOptions).val();
					var currentOption = $(this).data().option;
					var found;
					if(returnObj.length>0)
						found = _.find(returnObj,function(o){
							return o.option == currentOption;
						});
					if(found){
						found.selectedselections.push(currentSelection.toString());
					}else{
						returnObj.push({
							option:currentOption,
							selectedselections:[currentSelection.toString()]
						});
					}

				}
			}
			else if($(this).prop('type') == 'checkbox'){
				if($(this).prop('checked')){
					var currentSelection = $(this).data().selection;
					var currentOption = $(this).data().option;
					var found;
					if(returnObj.length>0)
						found = _.find(returnObj,function(o){
							return o.option == currentOption;
						});
					if(found){
						found.selectedselections.push(currentSelection.toString());
					}else{
						returnObj.push({
							option:currentOption,
							selectedselections:[currentSelection.toString()]
						});
					}
				}
			}
			else if($(this).prop('type') == 'text'){
				if($(this).val() != ''){
				var currentOption = $(this).data().option;
					returnObj.push({
						option:currentOption,
						//optiontext
						text:$(this).val()
					});
				}
			}
		});
		return returnObj;
	}
	,	arrayUnique:function (array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
	}
	, updateItem:function(e){
		var self = this;
		var currentOption = $(e.target).data().option;
		var currentSelection, active = false;
		var selectiontext = "";
		/*
		[{option, selectedselections]
		*/

			var selectedOptions = this.getSelectedOptions();
			var selections= this.model.get('selections');
			var filters = this.model.get('filters');
			for(var i=0;i<selections.length;i++){
				selections[i].selected = false;
			}
			if($(e.target).prop('type') == 'checkbox'){
				if($(e.target).prop('checked') == true) active = true;
				currentSelection = $(e.target).data().selection;
				//Refresh the affected options's selection
				var found = _.filter(filters,function(o){
						return o.custrecord_wof_isref == currentSelection;
				});
				if(found.length>0){
					for(var i=0;i<found.length;i++){
							var childCellOption = _.find(self.parentView.childCells,function(o){
									return o.model.get('internalid') == found[i].custrecord_wof_affectedoptions;
							});
							if(childCellOption.model.get('custrecord_wo_donotshowbydefault') == 'T')
							childCellOption.model.showOption = false;
							childCellOption.model.fetch({async:false}).done(function(data){
								childCellOption.model.set('selections', data[0].selections);
								childCellOption.render();
							});
					}
				}
			}
			else if($(e.target).prop('type')=='select-one'){
				if($(e.target).val() != "") active = true;
				currentSelection = $(e.target).val();
				for(var i=0;i<filters.length;i++){
						var childCellOption = _.find(self.parentView.childCells,function(o){
								return o.model.get('internalid') == filters[i].custrecord_wof_affectedoptions;
						});
						if(childCellOption.model.get('custrecord_wo_donotshowbydefault') == 'T')
						childCellOption.model.showOption = false;
						childCellOption.model.fetch({async:false}).done(function(data){
							childCellOption.model.set('selections', data[0].selections);
							childCellOption.render();
						});

				}
			}

			var found = _.find(selectedOptions,function(o){
				return o.option == currentOption;
			});
			if(found){
				for(var i=0;i<selections.length;i++){
					if($(e.target).prop('type') == 'checkbox'){
						if(found.selectedselections.indexOf(selections[i].internalid) != -1){
							selections[i].selected = true;
						}
					}
					else if($(e.target).prop('type')=='select-one'){
						if(found.selectedselections.indexOf(selections[i].internalid) != -1){
							selections[i].selected = true;
						}
					}
				}
			}

			var filteredSelection = [];
			if(selectedOptions){
				for(var i=0;i<selectedOptions.length;i++){
					//option of the selected
					var childCellOption = _.find(self.parentView.childCells,function(o){
							return o.model.get('internalid') == selectedOptions[i].option;
					});
					selectiontext += '<b>' + childCellOption.model.get('name') + "</b><br/>";
					if(selectedOptions[i].text)
						selectiontext += '&nbsp;&nbsp;&nbsp;&nbsp;' + selectedOptions[i].text + '<br/>';
					else if(selectedOptions[i].selectedselections){
					for(var j=0;j<selectedOptions[i].selectedselections.length; j++){
						var found = _.find(childCellOption.model.get('selections'),function(o){
							return o.internalid == selectedOptions[i].selectedselections[j];
						});
						//set the selection to selected for the view to show it
						if(found) {
							found.selected = true;
							selectiontext += '&nbsp;&nbsp;&nbsp;&nbsp;' + found.name + '<br/>';
						}
						//check if there is a filter for the selection
						var foundAffections = _.filter(childCellOption.model.get('filters'),function(o){
							return o.custrecord_wof_isref == selectedOptions[i].selectedselections[j];
						});
						var found1;
						if(foundAffections){
							for(var m=0; m<foundAffections.length; m++){
								//check if the affected filteres here are for the affected options of the current model's filter
								var found2 = _.find(filters,function(o){
										return o.custrecord_wof_affectedoptions == foundAffections[m].custrecord_wof_affectedoptions;
								})
								if(!found2) continue;
								if(filteredSelection.length>0){
									found1 = _.find(filteredSelection,function(o){
										return o.option == foundAffections[m].custrecord_wof_affectedoptions;
									});
									if(found1){
										if(foundAffections[m].custrecord_wof_affectedselection)
											found1.availableselections = this.arrayUnique(found1.availableselections.concat(foundAffections[m].custrecord_wof_affectedselection.split(',')));
									}else{
										filteredSelection.push({
											option:foundAffections[m].custrecord_wof_affectedoptions,
											availableselections:foundAffections[m].custrecord_wof_affectedselection?foundAffections[m].custrecord_wof_affectedselection.split(','):[]
										});
									}
								}else{
									filteredSelection.push({
										option:foundAffections[m].custrecord_wof_affectedoptions,
										availableselections:foundAffections[m].custrecord_wof_affectedselection?foundAffections[m].custrecord_wof_affectedselection.split(','):[]
									});
								}
							}
						}
					}
					}
				}
			}
			//check first if the current option has any value
			if(filteredSelection.length>0){
				for(var i=0;i<filteredSelection.length;i++){
						var childCellOption = _.find(self.parentView.childCells,function(o){
								return o.model.get('internalid') == filteredSelection[i].option;
						});
						if(childCellOption){
							var childselections = _.filter(childCellOption.model.get('selections'),function(o){
								return filteredSelection[i].availableselections.indexOf(o.internalid) != -1;
							});
							if(childCellOption.model.get('custrecord_wo_donotshowbydefault') == 'T')
								childCellOption.model.showOption = true;
							childCellOption.model.set('selections', childselections);
							childCellOption.render();
						}
				}
			}
			if($(e.target).prop('type')!='text')
				this.render();
		// }
		var productView = this.parentView.parentView;
		var productModel = productView.model;
		//Get the base price of the item
		var productOptions = productModel.get('options').models;
		var priceOptionModel = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_price';
		})
		var optionstotal = this.computeWebsiteOptions();
		priceOptionModel.set('value',{label:'Options Amount', internalid:optionstotal.toString()});

		var optionsvalues = this.getOptionsDetails();
		console.log('optionvalues')
		console.log(optionsvalues)
		var priceOptionJSON = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_json';
		});
		var priceOptionJSON1 = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_json1';
		});
		var priceOptionJSON2 = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_json2';
		});
		var priceOptionJSON3 = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_json3';
		});
		var priceOptionJSON4 = _.find(productOptions,function(model){
			return model.get('cartOptionId') == 'custcol_custom_options_json4';
		});
		if(JSON.stringify(optionsvalues.jsontext).length < 3999)
			priceOptionJSON.set('value',{label:'Options Code',internalid:JSON.stringify(optionsvalues.jsontext)});
		else{
			var length = 3999;
			var chunkstr = JSON.stringify(optionsvalues.jsontext).match(new RegExp('.{1,' + length + '}', 'g'));
			priceOptionJSON.set('value',{label:'Options Code',internalid:chunkstr[0]});
			priceOptionJSON1.set('value',{label:'Options Code',internalid:chunkstr[1]});
			if(chunkstr.length >= 3 ){
				priceOptionJSON2.set('value',{label:'Options Code',internalid:chunkstr[2]});
			}
			if(chunkstr.length >= 4 ){
				priceOptionJSON3.set('value',{label:'Options Code',internalid:chunkstr[3]});
			}
			if(chunkstr.length >= 5 ){
				priceOptionJSON4.set('value',{label:'Options Code',internalid:chunkstr[4]});
			}


		}

		if(selectiontext != ''){
			// var selectedTextModel = _.find(productOptions,function(model){
			// 	return model.get('cartOptionId') == 'custcol_cart_item_custom_options';
			// });
			// selectedTextModel.set('value',{label:'Selected Options', internalid: selectiontext})
			//productModel.set('selectedtext', selectiontext)
		}
		productModel.trigger('change')
	}
		//@method getContext
		//@returns {ItemViews.RelatedItem.View.Context}
	,	getContext: function ()
		{
			//@class ItemViews.RelatedItem.View.Context
			var self = this;
			var isoptionselected = false, selectedoptions = [], text = "";
			var itemmodel = SC.Application('Shopping')._layoutInstance.currentView.model;
			var selections = this.model.get('selections');
			// var showOption = false;
			// if(this.model.get('custrecord_wo_donotshowbydefault') == 'F')
			// 	showOption = true;
			return {
				model: this.model
				, selections: selections
				, filters: this.model.get('filters')
				, custrecord_wo_description: this.model.get('custrecord_wo_description')
				, custrecord_wo_inputtype: this.model.get('custrecord_wo_inputtype')
				, custrecord_wo_inputtypetext: this.model.get('custrecord_wo_inputtypetext')
				, custrecord_wo_required: this.model.get('custrecord_wo_required')=='T'?true:false
				, internalid: this.model.get('internalid')
				, name: this.model.get('name')
				, img: this.model.get('custrecord_wis_image')
				, selectedoptions: selectedoptions
				, isoptionselected : isoptionselected
				, text: this.model.text
				, showOption: this.model.showOption
				, custrecord_is_shipping_option: this.model.get('custrecord_is_shipping_option')
			};
			//@class ItemViews.RelatedItem.View
		}
	});
});

//@class ItemViews.RelatedItem.View.Initialize.Options
//@property {Item.Model} model
