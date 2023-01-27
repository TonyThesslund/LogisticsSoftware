//Filters orderTable based on user input

function searchFunc() {
	$(document).ready(function(){
		$("#input").on("keyup", function() {
		  var value = $(this).val().toLowerCase();
		  $("#orderTable tr").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	  });
	});
}
