$("#refresh").click(function() {
	// AJAX call here

	var request = "<div class = 'dynamic-box'>";
	request += "<h3>123412</h3>";
	request += "</div>";
	$("#request").append(request);

	var customer = "<div class = 'dynamic-box'>";
	customer += "<h3>531</h3>";
	customer += "</div>";
	$("#customer").append(customer);

	var time = "<div class = 'dynamic-box'>";
	time += "<h3>90 sec</h3>";
	time += "</div>";
	$("#time").append(time);

	var status = "<div class = 'dynamic-box'>";
	status += "<h3>Waiting</h3>";
	status += "</div>";
	$("#status").append(status);

	var driver = "<div class = 'dynamic-box'>";
	driver += "<h3>348734</h3>";
	driver += "</div>";
	$("#driver").append(driver);
});