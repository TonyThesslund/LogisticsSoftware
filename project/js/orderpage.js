//Scripts for building the orderpage. Tables are built based on the variable orderNum.
//orderNum is taken from localStorage.


var orderNum = localStorage.getItem('arraynum');

// INFO SECTION OF COLLECTION LIST
async function buildInfoTable(data){
	const response = await fetch('db/project.json');
	var data = await response.json();
	
	var infoTable = document.getElementById('infoTable');

		
			for (var i = 0; i < 1; i++){
				var row = ` <tr>
								<th>Order ID: ${data[orderNum].orderid}</th>
							</tr>
							<tr>
								<th>Customer: ${data[orderNum].customer}</th>
							</tr>
							<tr>
								<th>Customer ID: ${data[orderNum].customerid}</th>
							</tr>
							<tr>
								<th>Adress: ${data[orderNum].delivaddr}</th>
							</tr>
							<tr>
								<th>Delivery date: ${data[orderNum].deliverydate}</th>
							</tr>
							`
				infoTable.innerHTML += row
	}
	}


// ITEMS TO COLLECT ON COLLECTION LIST	
async function buildProductTable(data){

	const response = await fetch('db/project.json');
	var data = await response.json();

	var productTable = document.getElementById('productTable');

	for (var i = 0; i < data.length; i++){
		var row = `                  
				<tr>
						<td>${data[orderNum].products[i].code}</td>
						<td>${data[orderNum].products[i].suppliercode}</td>
						<td>${data[orderNum].products[i].product}</td>
						<td>${data[orderNum].products[i].description}</td>			
						<td>${data[orderNum].products[i].shelf_pos}</td>
						<td>${data[orderNum].products[i].unit_price + "€"}</td>		
						<td> 0 / ${data[orderNum].products[i].qty}</td>
						<td data-html2canvas-ignore="true"><input type="number" value="0" min="0" max=${data[orderNum].products[i].qty} data-html2canvas-ignore="true" id=${[i]} style="width: 35px;"></td>
				</tr>`
		productTable.innerHTML += row
	}

}

//Creates a PDF of all content within the "element" div. Uses the html2pdf library.

function getPDF(){
    var element = document.getElementById("element");
// settings for html2pdf
    var opt = {                                             
        margin:         0,
        filename:       "order.pdf",
        image:          { type: "jpeg", quality: 0.98},
        html2canvas:    { scale: 2},
        jsPDF:          { format: "A4", orientation: "landscape"}
    };
    html2pdf(element, opt);
	
}

//Loads customer comment

async function loadComment(data){
	const response = await fetch('db/project.json');
	var data = await response.json();
	var comment = document.getElementById("comment");
	var row = `<i>${data[orderNum].comment}</i>`

	customerComment.innerHTML += row
}




