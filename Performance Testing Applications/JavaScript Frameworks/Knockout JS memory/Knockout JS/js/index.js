ko.options.deferUpdates = true;
var ViewModel = function() {
    this.allItems = [];
    this.numberOfItems = 0;
    var posts = ko.mapping.fromJS([]);
    var self = this;
    self.allItems = posts;
    this.changeNumerOfDisplayedItems = function() {
        var arr = [];
        for (var i = 0; i < self.numberOfItems; i++) {
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
        self.allItems(ko.mapping.fromJS(arr).slice());

    }
    this.changeOne = function() {
        self.allItems()[Math.floor(Math.random() * self.numberOfItems)].favorites(9999);
    }
};

ko.applyBindings(new ViewModel());