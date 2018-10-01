{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="order-wizard-paymentmethod-purchasenumber-module">

	<h3 class="order-wizard-paymentmethod-purchasenumber-module-title">
		{{#if ispopayment}}
		{{translate 'Purchase Order Number'}}
		{{else}}
		{{translate 'Check/Money Order Payment'}}
		{{/if}}
	 </h3>
	<div class="order-wizard-paymentmethod-purchasenumber-module-row">
		{{#if ispopayment}}
		<label for="purchase-order-number" class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-label">
			{{translate 'Enter Purchase Order Number'}} <span class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional"></span>
		</label>
		<input
			type="text"
			name="purchase-order-number"
			id="purchase-order-number"
			class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-value"
			value="{{purchaseNumber}}"
		>
		{{else}}
			<label>Make Check payable to: Medicaleshop Inc. <br/><br/>
				<table><tr><td>
				Send Check to: </td>
				<td>87, Danbury Road Unit I <br/>
					New Milford, CT 06776 <br/>
					Phone: (866) 563 6812 <br/>
					Fax: (860) 838 4671 <br/>
					Email: csteam@medicaleshop.com
				</td>
			</tr></table>

		{{/if}}
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
