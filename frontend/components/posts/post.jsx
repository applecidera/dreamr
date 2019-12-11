import React from 'react'

class Post extends React.Component{
  render() {
    return (
      <div className="post-container">
        <div className="title">{this.props.post.title}</div>
        <div className="text">{this.props.post.text}</div>
        {/* <div className="title">{this.props.post.title}</div> */}
        {/* <div className="title">{this.props.post.title}</div> */}
      </div>
    )
  }
}

export default Post;