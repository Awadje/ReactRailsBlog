var Body = React.createClass({
  getInitialState() {
    return { posts: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/posts.json', (response) => { this.setState({ posts: response }) });
  },

  handleSubmit(post) {
    var newState = this.state.posts.concat(post);
    this.setState({ posts: newState }) },

    render() {
      return (
        <div>
          <NewPost handleSubmit={this.handleSubmit}/>
          <AllPosts posts={this.state.posts} />
         </div>
       )
     }
   });
