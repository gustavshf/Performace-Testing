var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeOne = this.onChangeOne.bind(this);
		this.renderItems = this.renderItems.bind(this);
    }
    componentWillMount() {
        this.setState({ posts: this.props.posts });
    }
    onChangeOne(event) {
        var posts = this.state.posts;
        var iRandomIndex = Math.floor((Math.random() * posts.length));
        posts[iRandomIndex].favorites = 9999;
        this.setState({ posts: posts , numberOfItems: posts.length});
    }
	updateNumberOfItems(event){
		this.state.numberOfItems = event.target.value;
	}
	renderItems(){
	  var arr = [];
        for (var i = 0; i < this.numberInput.value; i++) {
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
    this.setState({ posts:arr, numberOfItems: arr.length});
  }
    render() {
        console.log(this.state);
        return React.createElement(
            "div",
            null,
            
			React.createElement(
                "input",
                { ref: function(input) {
                this.numberInput = input;
           }.bind(this)}
            ),
			React.createElement(
                "button",
                { onClick: this.renderItems },
                "Display this number of items"
            ),
			React.createElement(
                "br",
                {}
            ),
			React.createElement(
                "button",
                { onClick: this.onChangeOne },
                "Change one item"
            ),
            this.state.posts.map(post => {
                    var sUserName = (post.firstName.slice(0, 1) + post.lastName).toLowerCase();
                    var iRating = (post.favorites + post.reposts) / 50;
                    return React.createElement(
                        "div",
                        null,
                        React.createElement("hr", null),
                        React.createElement(ListItem, _extends({
                            sUserName: sUserName,
                            iRating: iRating
                        }, post))
                    );
                })
        );
    }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  //shouldComponentUpdate improves performance
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.lastName !== this.props.lastName || nextProps.firstName !== this.props.firstName || nextProps.image !== this.props.image || nextProps.favorites !== this.props.favorites || nextProps.reposts !== this.props.reposts || nextProps.text !== this.props.text;
  }
  render() {
    const { firstName, lastName, sUserName, iRating, reposts, favorites, text, image } = this.props;
    return React.createElement(
      "div",
      { className: "row input-wrap" },
      React.createElement(
        "div",
        { className: "media" },
        
        React.createElement(
          "div",
          { className: "body-container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "media-body" },
              React.createElement(
                "h4",
                { className: "post-heading" },
                firstName,
                " ",
                lastName,
                " ",
                React.createElement(
                  "a",
                  null,
                  "@",
                  sUserName
                ),
                React.createElement(
                  "span",
                  { className: "timeAgo" },
                  "  4 minutes ago"
                )
              ),
              React.createElement(
                "p",
                { className: "post-body" },
                text
              ),
              React.createElement(
                "p",
                { className: "post-rating" },
                "Rating: ",
                iRating
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "bottom-links" },
              React.createElement(
                "a",
                { className: "post-property", href: "#" },
                "Expand"
              ),
              React.createElement(
                "a",
                { className: "post-property", href: "#" },
                "Reply"
              ),
              React.createElement(
                "a",
                { className: "post-property", href: "#" },
                "Repost (",
                reposts,
                ")"
              ),
              React.createElement(
                "a",
                { className: "post-property", href: "#" },
                "Star (",
                favorites,
                ")"
              ),
              React.createElement(
                "a",
                { className: "post-property", href: "#" },
                "More"
              )
            )
          )
        )
      )
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(PostList, {
      posts: []
    });
  }
}
  ReactDOM.render(React.createElement(App, null), document.getElementById('container'));

