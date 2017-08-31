# CurryingShoppingCart_JS
A JavaScript program that utilizes function currying to check items in shopping carts against various price listings

## Functions

<dl>
<dt><a href="#listedPrice">listedPrice(listings, name)</a> ⇒</dt>
<dd><p>Finds the price of an item using the given listing and name of the item</p>
</dd>
<dt><a href="#calculateTotals">calculateTotals(listings, carts)</a> ⇒</dt>
<dd><p>Calculates the total of each cart&#39;s items and returns each cart and its value as an array</p>
</dd>
</dl>

<a name="listedPrice"></a>

## listedPrice(listings, name) ⇒
Finds the price of an item using the given listing and name of the item

**Kind**: global function

**Returns**: the price of the item or 0 is the item is not in the listing

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| listings | the item/price pairs |
| name | the name of the item we are trying to find the price of |

<a name="calculateTotals"></a>

## calculateTotals(listings, carts) ⇒
Calculates the total of each cart's items and returns each cart and its value as an array

**Kind**: global function

**Returns**: an array of objects with customers and totals based on the listings

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| listings | the item/price pairs |
| carts | an array of cart objects which contain the customer name and an array of items |
