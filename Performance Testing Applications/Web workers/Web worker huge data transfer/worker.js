
onmessage = function(event) {
	var arr = [1,1,1,1,1,1,1,1,1,1];

	var mainThreadData = event.data;
	if(mainThreadData.scenario==="stringify"){
		var arrToProcess = JSON.parse(mainThreadData.arrToProcess);
	}
	else{
	var arrToProcess = mainThreadData.arrToProcess;
	}
	var encryptedSum = 0;
	for(var i=0; i<arrToProcess.length; i++){
		var elem = arrToProcess[i].value;
		for(var j=0; j<arr.length; j++){
			elem = elem * arr[j];
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
		}
		encryptedSum=encryptedSum+elem;
	}
	postMessage(encryptedSum);
};