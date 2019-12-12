import React from 'react';

class Post extends React.Component {
	render() {
		return (
			<div key={this.props.post.id} className="post-container">
        <div className="avatar"></div>
				<div className="postbox">
          <div className ="post-top"><p>Here's a dream: </p></div>
					<div className="title">{this.props.post.title}</div>
					<div className="text">{this.props.post.text}</div>
					<div className="content-url">{this.props.post.content_url}</div>
					<div className="tags">{this.props.post.tags}</div>
				</div>
			</div>
		);
	}
}

export default Post;
