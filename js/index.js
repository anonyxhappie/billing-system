function validateCname() {
    var val = document.getElementById('cname').value;
    if (!val.match(/^[a-zA-Z ]+$/)) {
        return false;
    }
    return true;
}


var rowCount = 1;
var totalBalance = 0;
function calculate() {
	localStorage["cname"] = document.getElementById('cname').value;
	var total, totals = 0, price, quantity;	
	for (var i = 1; i < rowCount; i++) {
			price = document.getElementById('p' + i).value;
			quantity = document.getElementById('q' + i).value;
			item = document.getElementById('items'+i).value;
			localStorage['q'+i] = quantity;
			localStorage['p'+i] = price;
			localStorage['items'+i] = item;
			total = 1*price*quantity;
			localStorage['total'+i] = total;
			totals+=total;
	}
	document.getElementById('total').innerHTML = totals;
	totalBalance = totals;
	localStorage['rowCount'] = rowCount;
}
function addItem(){  
	var itemArray = new Array('Baba Suit', 'Baniyan', 'Belt', 'Bra Panty', 'Child Jeans', 
		'Child Shirt', 'Cot', 'Cotpent', 'Dupta', 'Hanky', 'Inner', 'Jeans', 'Kurta', 'Ladies Jeans', 'Leging', 
		'Long Topper', 'Salex', 'Salwar', 'Shirt', 'Shoes', 'Socks', 'Sweter', 'Tawal', 'Tie', 'Topper', 'Underwar');
	var table = document.getElementById('myTable');
	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = rowCount;
	var select = document.createElement('select');
	select.setAttribute('id', 'items'+rowCount)
	select.setAttribute('class', 'col-sm-12 form-control')
	cell2.innerHTML = "";
	cell2.appendChild(select)
	for (var i = 0; i < itemArray.length; i++) {
		var option = document.createElement('option');
		option.setAttribute('value', itemArray[i]);
		option.text=itemArray[i];
		select.appendChild(option);;	
	};
	cell3.innerHTML = "<input type='number' id='q"+ rowCount +"' class='col-sm-12 form-control' value='1'>";
	cell4.innerHTML = "<input type='number' id='p"+ rowCount +"' class='col-sm-10 form-control' placeholder='₹'>";
	rowCount++;
}
addItem();

function generateBill(){
	if(validateCname()){
		if (document.getElementById('cname').value==undefined || totalBalance == 0) {
			alert('One Or More Fields can\'t be empty! \n please check Customer name or Price Value.\n\nPlease \'Calculate\' before generating Bill.');
		}else{
			location.href='raw/invoice.html';	
		}	
	}else{
		        alert('Sorry! Only alphabets(a-zA-Z) are allowed in Customer Name Field.');
	}
}