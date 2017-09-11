var rowCount = localStorage['rowCount'];
var totalQuantity = 0, grandTotal=0.00, cgst=2.5, sgst=2.5, cTotal=0.00, sTotal=0.00;
var quantity, price, pq, total=0;
for (var i = 1; i < rowCount; i++) {
  quantity = 1*localStorage['q'+i];
  price = 1.0*localStorage['p'+i];
  pq = price*quantity;
  totalQuantity+=quantity;
  total+=pq;
  document.write("<tr><td>"+ localStorage['items'+i] +"</td><td></td><td></td><td></td><td>"+ price +"</td><td>"+ quantity +"</td><td>"+ pq +"</td></tr>");
}
cTotal=cgst*total/100; sTotal=sgst*total/100;
grandTotal = total + cTotal + sTotal;
document.write("<tr><td></td><td></td><td></td><td></td><td class='line'>Total</td><td class='line'>"+ totalQuantity +"</td><td class='line'>"+ total +"</td></tr>");
document.write("<tr><td></td><td></td><td></td><td></td><td>CGST</td><td>"+ cgst +"%</td><td>"+ cTotal +"</td></tr>");
document.write("<tr><td></td><td></td><td></td><td></td><td>SGST</td><td>"+ sgst +"%</td><td>"+ sTotal +"</td></tr>");
document.write("<tr><td></td><td><td></td><td></td></td><td>Grand Total</td><td></td><td>₹"+ grandTotal.toFixed(2) +"</td></tr>");