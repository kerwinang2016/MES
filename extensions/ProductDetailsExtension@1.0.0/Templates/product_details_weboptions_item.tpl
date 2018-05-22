{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="weboption">
	{{#if showOption}}
		{{#if custrecord_wo_required}}
		<label class="weboption-name required">{{name}}</label>
		{{else}}
		<label class="weboption-name">{{name}}</label>
		{{/if}}
		{{#if custrecord_wo_description}}
		<div class="weboption-description">
			{{custrecord_wo_description}}
		</div>
		{{/if}}

		<div class="weboption-selections">
			{{#ifEquals custrecord_wo_inputtypetext 'multipleselect'}}
				{{#if custrecord_wo_required}}
					<ul class="required-entry">
				{{else}}
					<ul >
				{{/if}}
				{{#each selections}}
					<li>
						<input {{#if selected }} checked {{/if}} data-selection="{{internalid}}" data-sku='{{custrecord_wis_sku}}' data-option="{{custrecord_wis_relatedwebsiteoption}}" type="checkbox" class="product-custom-option checkbox" name="options_{{custrecord_wis_relatedwebsiteoption}}_{{internalid}}" id="options_{{custrecord_wis_relatedwebsiteoption}}_{{internalid}}" data-price="{{custrecord_wis_price}}">
						<span class="label">
							<label for="options_{{custrecord_wis_relatedwebsiteoption}}_{{internalid}}">{{name}}
								{{#if custrecord_wis_price}}
								<span class="price-notice">+
									<span class="price">{{formatCurrency custrecord_wis_price}}</span>
								</span>
								{{/if}}
							</label>
							{{#if custrecord_wis_hint}}
								<img src="http://www.medicaleshop.com/skin/frontend/ultimo/mes-custom/pektsekye/optionextended/info_icon.gif" class="weboption-tooltip ox-tooltip-icon tooltipstered"  data-toggle="tooltip" data-original-title="{{custrecord_wis_hint}}">
							{{/if}}
						</span>
					</li>
				{{/each}}
				</ul>
			{{else ifEquals custrecord_wo_inputtypetext 'text'}}
				{{#if custrecord_wo_required}}
					<input data-option="{{internalid}}" type="text" id="options_{{internalid}}" class="input-text required-entry product-custom-option" name="options_{{internalid}}" value="{{text}}">
				{{else}}
					<input data-option="{{internalid}}" type="text" id="options_{{internalid}}" class="input-text product-custom-option" name="options_{{internalid}}" value="{{text}}">
				{{/if}}
			{{else ifEquals custrecord_wo_inputtypetext 'radiobutton'}}
				{{#if custrecord_wo_required}}
					<ul class="required-entry">
					{{#each selections}}
						<li>
							<input {{#if selected }} checked {{/if}} data-selection="{{internalid}}" data-sku='{{custrecord_wis_sku}}' data-option="{{custrecord_wis_relatedwebsiteoption}}" class="product-custom-option" type="radio" name="options_{{custrecord_wis_relatedwebsiteoption}}_{{internalid}}" value="{{internalid}}"  data-price="{{custrecord_wis_price}}"> {{name}}
							{{#if custrecord_wis_price}}
							<span class="price-notice">+
								<span class="price">{{formatCurrency custrecord_wis_price}}</span>
							</span>
							{{/if}}
						</li>
					{{/each}}
					</ul>
				{{else}}
					<ul>
					{{#each selections}}
						<li>
							<input {{#if selected }} checked {{/if}} data-selection="{{internalid}}" data-option="{{custrecord_wis_relatedwebsiteoption}}" class="product-custom-option" type="radio" name="options_{{custrecord_wis_relatedwebsiteoption}}_{{internalid}}" value="{{internalid}}"  data-price="{{custrecord_wis_price}}"> {{name}}
							{{#if custrecord_wis_price}}
							<span class="price-notice">+
								<span class="price">{{formatCurrency custrecord_wis_price}}</span>
							</span>
							{{/if}}
						</li>
					{{/each}}
					</ul>
				{{/if}}
			{{else}}
					{{#each selections}}
						{{#if custrecord_wis_hint}}
							<div {{#if selected}} style='display:block' {{else}} style='display:none;'{{/if}}>
								{{custrecord_wis_hint}}
							</div>
						{{/if}}
					{{/each}}
					{{#if custrecord_wo_required}}
						<select data-option="{{internalid}}" name="options_{{internalid}}" id="option_{{internalid}}" class="required-entry product-custom-option" title="">
					{{else}}
						<select data-option="{{internalid}}" name="options_{{internalid}}" id="option_{{internalid}}" class="product-custom-option" title="">
					{{/if}}
						<option value="">-- Please Select --</option>
					{{#each selections}}
						{{#if custrecord_wis_price}}
						<option {{#if selected }} selected {{/if}} data-sku='{{custrecord_wis_sku}}' data-price="{{custrecord_wis_price}}" value="{{internalid}}">{{name}} + {{formatCurrency custrecord_wis_price}}</option>
						{{else}}
						<option {{#if selected }} selected {{/if}} data-sku='{{custrecord_wis_sku}}' data-price="{{custrecord_wis_price}}"  value="{{internalid}}">{{name}}</option>
						{{/if}}
					{{/each}}
					</select>
			{{/ifEquals}}
		</div>
		<div class="weboption-selections-images">
			<ul >
			{{#each selections}}
				{{#if custrecord_wis_image}}
					<li style="list-style-type:none;display:inline;">
						<img width="50px" height="50px" data-selectedoption-img='{{custrecord_wis_relatedwebsiteoption}}' data-selection-img="{{internalid}}" class="{{#if selected }}{{else}}hide{{/if}}" src="{{custrecord_wis_imagetext}}"/>
					</li>
				{{/if}}
			{{/each}}

		</ul>
		</div>
		{{/if}}
</div>

{{!----
Use the following context variables when customizing this template:

	itemURL (String)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	sku (String)
	model (Object)
	model.itemsIds (Number)
	model.options (Array)
	model._matrixParent (Object)
	model._matrixParent.options (Array)
	model._url (String)
	model._name (String)
	model._thumbnail (Object)
	model._thumbnail.url (String)
	model._thumbnail.altimagetext (String)
	model._sku (String)
	model._rating (Number)
	model._ratingsCount (Number)
	model._matrixChilds (Array)
	model._inStockMessage (String)
	model._showInStockMessage (Boolean)
	model._showStockDescription (Boolean)
	model._stockDescriptionClass (String)
	model._quantityavailableforstorepickup_detail (Array)
	model._showQuantityAvailable (Boolean)
	showRating (Boolean)
	itemName (String)
	itemId (Number)

----}}
