import React from 'react';

class Post extends React.Component {
	render() {
		const {currentUser, post} = this.props;
		let topBar;
		let botBar;
		if (post.user.id===currentUser.id){ //! post is current user's
			topBar = (<span>{post.user.username}</span>);
			botBar = (<>
								<div></div>
								<div className="post-bottom-right">
									<div className="post-icons">
										<button className="reply far fa-comment"></button>
										<button className="reblog fas fa-retweet"></button>
										<button className="edit fas fa-cog"></button>
									</div>
								</div>
								</>);
			// TODO no notes on left; reply, reblog, edit on right
		} else {
			// topBar = (<span>Here's a dream: {post.user.username}</span>); // !someone else's post ! rando post
			topBar = (<span>{post.user.username}</span>); // !someone else's post
			botBar = (<>
								<div className="post-bottom-left">
									<span>Karma</span>
								</div>
								<div className="post-bottom-right">
									<div className="post-icons">
										<button className="reply far fa-comment"></button>
										<button className="reblog fas fa-retweet"></button>
										<button className="like far fa-heart"></button>
									</div>
								</div>
								</>);
			// TODO notes on left; reply, reblog, like on right
			// space between
		}
		let titleGoesHere=null;
		if (post.title!="")
			titleGoesHere = (<div className="title">{post.title}</div>);

		let imagesGoesHere = null;
		if (post.imageUrls)
			imagesGoesHere = post.imageUrls.map((imageUrl, idx)=>{
				return (<img key={idx} className="image" src={imageUrl}></img>)
			})

		let className;
		if (this.props.bringMeDown){
			className="post-container bring-me-down"
		} else {
			className="post-container"
		}

		// debugger



		return (
			<div key={post.id} className={className}>
				<img className="avatar" src={post.user.avatar}></img>
				<div className="postbox">
					<div className ="post-top">{topBar}</div>
					{titleGoesHere}
					{imagesGoesHere}
					<div className="text">{post.text}</div>
					<div className="tags">{post.tags}</div>
					<div className ="post-bottom">{botBar}</div>
				</div>
			</div>
		);
	}
}

export default Post;
