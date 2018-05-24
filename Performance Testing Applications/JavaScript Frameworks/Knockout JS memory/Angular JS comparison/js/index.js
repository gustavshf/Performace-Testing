var performanceTestApp = angular.module('performanceTest', []);

var posts = [];
performanceTestApp.controller('postsController', function($scope) {
    $scope.numberOfItems = 0;
    $scope.posts = posts;
    $scope.changeOnePost = function() {
        var randomIndex = Math.floor(Math.random() * ($scope.posts.length - 1));
        $scope.posts[randomIndex].favorites = 9999;
    };
    $scope.changeNumerOfDisplayedItems = function() {
        var arr = [];
        for (var i = 0; i < $scope.numberOfItems; i++) {
            arr.push({
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
        $scope.posts = arr;
    };
    $scope.posts = posts;


});