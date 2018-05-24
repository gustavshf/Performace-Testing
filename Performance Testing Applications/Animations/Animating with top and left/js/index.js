function startAnimation(){
	var iCount = parseInt(document.getElementById("numberinput").value);
	var html = "";
	for(var i=0; i<iCount; i++){
		html += "<div id='animate' class='animatableDiv'></div>";
	}
	document.getElementById("container").innerHTML=html;
}