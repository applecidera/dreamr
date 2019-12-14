import React from 'react';

class Post extends React.Component {
	render() {
		const {currentUser, post} = this.props;
		// debugger
		let topBar;
		let botBar;
		if (post.user.username===currentUser.username){ //! post is current user's
			topBar = (<span>{post.user.username}</span>);
			botBar = (<>
								<div></div>
								<div className="post-bottom-right">
									<button className="reply far fa-comment"></button>
									<button className="reblog fas fa-retweet"></button>
									<button className="edit far fa-heart"></button>
								</div>
								</>);
			// TODO no notes on left; reply, reblog, edit on right
		} else {
			topBar = (<span>Here's a dream: {post.user.username}</span>); // !someone else's post
			botBar = (<>
								<div className="post-bottom-left">Karma</div>
								<div className="post-bottom-right">
									<button className="reply far fa-comment"></button>
									<button className="reblog fas fa-retweet"></button>
									<button className="like far fa-heart"></button>
								</div>
								</>);
			// TODO notes on left; reply, reblog, like on right
			// space between
		}
		return (
			<div key={post.id} className="post-container">
        <img className="avatar" src={post.user.avatar}></img>
				<div className="postbox">
					<div className ="post-top">{topBar}</div>
					<div className="title">{post.title}</div>
					<div className="content-url">{post.content_url}</div>
					<div className="text">{post.text}</div>
					<div className="tags">{post.tags}</div>
					<div className ="post-bottom">{botBar}</div>
				</div>
			</div>
		);
	}
}

export default Post;
