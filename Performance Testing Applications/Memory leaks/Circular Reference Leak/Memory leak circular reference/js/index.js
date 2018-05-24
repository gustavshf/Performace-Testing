function removeOtherButton(){
		document.getElementById("leakbutton").remove();
	}
(function () {
	
	function leakExample() {
		var a1={
			name:"",
			list:[]
		};
		var a2={
			name:"",
			list:[]
		};
		for(var i=0; i<300000; i++){
			a1.list.push({name:"test"});
		}
		for(var i=0; i<300000; i++){
			a2.list.push({name:"test"});
		}
		a1.name = a2.list[0].name; 
		a2.name = a1.list[0].name; 
	}
	leakExample();
	
})();



