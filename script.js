function responseHandler(response) {	
	$(".progress").css("visibility", "hidden");
	const results = response.data;
	let innerHtml = "";
	const elements = results.forEach(function(section) {
		let card = "<div class='card-panel'>"
		card += "<h3>" + section.title + "</h3>";
		card += "<h3>" + section.meets + "</h3>";
		if(section.class_attributes) {
			card += "<h3>" + section.class_attributes + "</h3>";
		}
		card += "<h4>" + section.room + "</h4>";
		card += "<h4>" + section.units + "</h4>";
		card += "</div>";

		innerHtml += card;
	});

	const resultsDiv = $("#results");
	resultsDiv.html(innerHtml);
}
function submitHandler(event) {
	event.preventDefault();
	// gets the user input data
	const userInput = $("#professorSearch").val();
	const deptCode = $("#deptCode").val();
	//alert(userInput);

	// building the request URL
	//const requestUrl = "https://crossorigin.me/http://api.umbc.me/v0/teaches?name=" + userInput;
	const requestUrl = "https://crossorigin.me/http://api.umbc.me/v0/teachesDept?name=" + userInput + "&dept=" + deptCode;

	$(".progress").css("visibility", "visible");
	axios.get(requestUrl).then(responseHandler);
}

$("#searchForm").submit(submitHandler);