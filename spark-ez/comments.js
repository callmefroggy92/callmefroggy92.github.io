function submitComment(url, name, comment){

	var xhttp = new XMLHttpRequest();

	xhttp.open("POST", "https://spark-ez.firebaseio.com/spark-ez/" + url + ".json", true);
	xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");

	var d = new Date();
	var time = d.getTime();

	xhttp.send(JSON.stringify({"name":name, "comment":comment, "date":time}));

	getComments(url);
}

function getComments(url){

	console.log("Loading comments");
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "https://spark-ez.firebaseio.com/spark-ez/" + url + ".json", true);
	xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");

	var data = new Object();

  	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
			loadComments(JSON.parse(xhttp.responseText));
   		}
  	};

	xhttp.send();
}

function loadComments(data){
	document.getElementById("comments").innerHTML = "";
	for (var key in data) {
		if (data.hasOwnProperty(key) && data[key].hasOwnProperty("comment")) {
			console.log(data[key]["comment"]);
			var div = document.createElement("p");
			div.style = "width:90%; border:1pt solid black;"
			div.innerHTML = data[key]["name"] + " -- " + new Date(data[key]["date"]) + " <br> >> " + data[key]["comment"] + "<br>";
			document.getElementById("comments").appendChild(div);
                }
	}
}
