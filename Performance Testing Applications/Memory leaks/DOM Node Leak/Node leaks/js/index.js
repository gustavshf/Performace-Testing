(function () {
	'use strict';

		var posts = [];
        for (var i = 0; i < 10000; i++) {
            posts.push({
                text: 'Lorem Ipsum has been the ' + i + ' industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            });
        }
			for (var i = 0; i < posts.length; i++) {
				var newListItem = document.createElement("li");
				var ListValue = document.createTextNode(posts[i].text);
				newListItem.appendChild(ListValue);
				document.getElementById("posts").appendChild(newListItem);
			}
		
	var list = document.getElementById("posts");//Ar šo variantu tiks izraisīta atmiņas noplūde.
	document.getElementById('leakbutton').addEventListener("click", function () {
		//var list = document.getElementById("posts");//Ar šo variantu netiks izraisīta atmiņas noplūde.
		list.remove();
	})
})();