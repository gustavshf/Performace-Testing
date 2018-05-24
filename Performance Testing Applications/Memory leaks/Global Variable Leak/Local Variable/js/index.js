(function () {
	var getData = function(){
		var posts=[];
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
	var leakExample=function(){
			var posts = getData();//Šis kods izveido nevis lokālu mainīgo, bet window.posts
	}
	leakExample();
})();