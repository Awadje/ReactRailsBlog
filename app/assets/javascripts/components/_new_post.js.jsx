var NewPost= React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var blog = this.refs.blog.value;
    $.ajax({
      url: '/api/v1/posts',
      type: 'POST',
      data: { post: { title: title, blog: blog } },
      success: (post) => {
        this.props.handleSubmit(post);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='title' placeholder='Enter the title of the post' />
        <input ref='blog' placeholder='Enter a blog' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
