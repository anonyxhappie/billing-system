var rowCount = localStorage['rowCount'];
var totalQuantity = 0, grandTotal=0.00, cgst=2.5, sgst=2.5, cTotal=0.00, sTotal=0.00;
var quantity, price, pq, total=0, discount=0;
for (var i = 1; i < rowCount; i++) {
  quantity = 1*localStorage['q'+i];
  price = 1.0*localStorage['p'+i];
  pq = price*quantity;
  totalQuantity+=quantity;
  total+=pq;
  document.write("<tr><td>"+ localStorage['items'+i] +"</td><td></td><td></td><td></td><td>"+ price.toFixed(2) +"</td><td>"+ quantity +"</td><td>"+ pq.toFixed(2) +"</td></tr>");
}
cTotal=cgst*total/100; sTotal=sgst*total/100;
grandTotal = total + cTotal + sTotal;
document.write("<tr id='total'><td></td><td></td><td></td><td></td><td class='line'>Total</td><td class='line'>"+ totalQuantity +"</td><td class='line'>"+ total.toFixed(2) +"</td></tr>");
document.write("<tr><td></td><td></td><td></td><td></td><td>CGST</td><td>"+ cgst +"%</td><td>"+ cTotal.toFixed(2) +"</td></tr>");
document.write("<tr><td></td><td></td><td></td><td></td><td>SGST</td><td>"+ sgst +"%</td><td>"+ sTotal.toFixed(2) +"</td></tr>");
if(localStorage['isDiscount']=='true'){
	discount = localStorage['discountid'];
	document.write("<tr id='gtotal'><td></td><td><td></td><td></td></td><td>Grand Total</td><td></td><td>₹"+ grandTotal.toFixed(2) +"</td></tr>");
	document.write("<tr id='dis'><td></td><td><td></td><td></td></td><td>Discount</td><td>"+ discount +"%</td><td>-₹"+ (grandTotal*discount/100).toFixed(2) +"</td></tr>");
}

document.write("<tr><td></td><td><td></td><td></td></td><td>Payable Amount</td><td></td><td>₹"+ (grandTotal - (grandTotal*discount/100)).toFixed(0) +"/-</td></tr>");