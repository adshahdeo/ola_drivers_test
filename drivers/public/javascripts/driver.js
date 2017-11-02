var driver_id = location.href.split('?')[1].split('=')[1];
console.log(driver_id);

$("#driver_id").text($("#driver_id").text() + driver_id);

$("#refresh").click(function() {
	// AJAX call here



	var wait = "<div class = 'dynamic-box'>";
	wait += "<h3>Req.Id : 531</h3>";
	wait += "<h3>Cust.Id : 117</h3>";
	wait += "<h3>15 mins ago!</h3>";
	wait += "<button class = 'accept'>Accept Ride</button>";
	wait += "<br /><br />";
	wait += "</div>";
	$("#waiting").append(wait);

	var ongoing = "<div class = 'dynamic-box'>";
	ongoing += "<h3>Req.Id : 531</h3>";
	ongoing += "<h3>Cust.Id : 117</h3>";
	ongoing += "<h3>Requested : 5 mins ago!</h3>";
	ongoing += "<h3>Picked Up : 3 mins ago!</h3>";
	ongoing += "<br /><br />";
	ongoing += "</div>";
	$("#ongoing").append(ongoing);

	var complete = "<div class = 'dynamic-box'>";
	complete += "<h3>Req.Id : 531</h3>";
	complete += "<h3>Cust.Id : 117</h3>";
	complete += "<h3>Requested : 15 mins ago!</h3>";
	complete += "<h3>Picked Up : 10 mins ago!</h3>";
	complete += "<h3>Completed : 10 mins ago!</h3>";
	complete += "<br /><br />";
	complete += "</div>";
	$("#complete").append(complete);
});