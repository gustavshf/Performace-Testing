function removeOtherButton(){
		document.getElementById("leakbutton").remove();
		document.getElementById("removeinterval").disabled = false;
	}
(function () {
	var getData = function(){
		var posts = [];
        for (var i = 0; i < 100000; i++) {
            posts.push({
				firstName: 'Jake' + i,
                lastName: 'Smith' + i,
                text: 'Lorem Ipsum has been the ' + i + ' industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                favorites: i + 100,
                reposts: i + 50,
                image: "test" + i,
                age: i,
                id: i
				});
        }
	return posts;
	}
	document.getElementById('removeinterval').addEventListener("click", function () {
		clearInterval(window.testinterval);
		list.remove();
	});
	var leakExample=function(){
		var posts = getData();
		testinterval = setInterval(function() {
			var element = document.getElementById('leakbutton');
			//setInterval atstās atmiņā posts masīvu arī tad, kad izmantotais DOM elements ar id 'leakbutton' būs noņemts
			if(element) {
				element.innerHTML = posts[Math.floor(Math.random() * 10)].id;
			}
		}, 1000);
	}
	leakExample();
})();