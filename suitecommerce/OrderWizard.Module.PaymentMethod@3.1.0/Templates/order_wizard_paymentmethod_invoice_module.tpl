{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="order-wizard-paymentmethod-invoice-module">
	<!--
	<div class="order-wizard-paymentmethod-invoice-module-row">
		<div class="order-wizard-paymentmethod-invoice-module-terms">
			<p class="order-wizard-paymentmethod-invoice-module-terms-label">
				{{translate 'Terms'}}
			</p>
			<p class="order-wizard-paymentmethod-invoice-module-terms-value">
				{{termsName}}
			</p>
		</div>
		<div class="order-wizard-paymentmethod-invoice-module-balance">
			<p class="order-wizard-paymentmethod-invoice-module-balance-label">
				{{translate 'Available Balance'}}
			</p>
			<p class="order-wizard-paymentmethod-invoice-module-balance-value">
				{{balanceAvailable}}
			</p>
		</div>
	</div>
	-->
		<h3 class="order-wizard-paymentmethod-purchasenumber-module-title">
			{{translate 'Purchase Order Number/Check Number'}}
		 </h3>
		<div class="order-wizard-paymentmethod-purchasenumber-module-row">
			<label for="purchase-order-number" class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-label">
				{{translate 'Enter Purchase Order Number/Check Number'}} <span class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional"></span>
			</label>
			<input
				type="text"
				name="purchase-order-number"
				id="purchase-order-number"
				class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-value"
				value="{{purchaseNumber}}"
			>
		</div>
	{{#if showTerms}}
		<p class="order-wizard-paymentmethod-invoice-module-conditions">
			{{translate 'I agree to pay with my current Purchase Order <a data-toggle="show-terms" href="#">Terms & Conditions</a>'}}
		</p>
	{{/if}}
</div>



{{!----
Use the following context variables when customizing this template:

	termsName (String)
	showTerms (Boolean)
	balanceAvailable (String)

----}}
