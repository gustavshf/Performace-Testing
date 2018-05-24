(function () {
	'use strict';
	var attachTheListener = function(){
		var a1=[];
		var a2=[];
		for(var i=0; i<300000; i++){
			a1.push({name:"test"});
		}
		for(var i=0; i<300000; i++){
			a2.push({name:"test"});
		}
	var oObject={
		p1:a1,
		p2:a2
	}
	document.getElementById('leakbutton').addEventListener("click", function () {
		alert(oObject.p1[0].name);
	});
	}
	attachTheListener();
	
})();