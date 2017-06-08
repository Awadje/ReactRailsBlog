var AllPosts = React.createClass({
  render() {
    var posts= this.props.posts.map((post) => {
      return (
        <div key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.blog}</p>
        </div>
      )
    });

    return(
       <div>
        {posts}
      </div>
    )
  }
});
