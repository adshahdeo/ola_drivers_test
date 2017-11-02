$("#book").click(function() {
	var customer_id = $("#customer_id").val();
	var latitude = $("#latitude").val();
	var longitude = $("#longitude").val();
	if(!customer_id || !latitude || !longitude) {
		alert("Please enter all the fields");
	} else {
		console.log(customer_id);
		console.log(latitude);
		console.log(longitude);
		// AJAX call goes here
	}
});