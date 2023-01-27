// Function to fetch json file and create a new table row for each order.

async function buildOrderTable(data){
	const response = await fetch('db/project.json');
	var data = await response.json();

	var orderTable = document.getElementById('orderTable');
	

	for (var i = 0; i < data.length; i++){
		var row = `<tr class="orderLink"  onclick=openOrder(this.id) id="${[i]}">
						<td>${data[i].orderid}</td>
						<td>${data[i].customerid}</td>
						<td>${data[i].customer}</td>
						<td>Unprocessed</td>
						<td>${data[i].respsalesperson}</td>
						<td>${data[i].totalprice}</td>
						<td>${data[i].deliverydate}</td>
				  </tr>`	  
		orderTable.innerHTML += row;;
	}
}

// Function to save the index of order clicked to localStorage. 

function openOrder(ident){

	localStorage.setItem('arraynum', ident);

	window.open("order.html");
        return false;
}

