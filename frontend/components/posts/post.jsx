import React from 'react';
import PostDropdown from './post_dropdown';

class Post extends React.Component {

	constructor(props){
		super(props);
		this.state=({
			author: null || this.props.author
		})
	}

	componentDidMount(){
		this.props.fetchUser(this.props.authorId);
	}

	componentDidUpdate(old1,old2){
		if (!old2.author && old1.author){
			this.setState({author: old1.author})
		}
	}

	render() {

		const {currentUser, post, authorId} = this.props;
		let {author} = this.state;

		if (!author) author="";
		
		let topBar;
		let botBar;
		
		if (authorId===currentUser.id){ //! post is current user's
			topBar = (<span>{author.username}</span>);
			botBar = (<>
								<div></div>
								<div className="post-bottom-right">
									<div className="post-icons">
										<button className="reply far fa-comment"></button>
										<button className="reblog fas fa-retweet"></button>
										<PostDropdown postId={post.id}></PostDropdown>
										{/* <button 
										className="edit fas fa-cog"
										onClick={()=>this.props.openModal("delete-confirmation")}
										value={post.id}></button> */}
									</div>
								</div>
								</>);
			// TODO no notes on left; reply, reblog, edit on right
		} else {
			topBar = (<span>{author.username}</span>); // !someone else's post
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

		let textGoesHere = null;
		let source;
		if (post.type="quote") source="-";
		if (post.text!="")
			post.text=(<div className="text">{source}{post.text}</div>);
		

		return (
			<div key={post.id} className="post-container">
				<img className="avatar" src={window.avatar}></img>
				<div className="postbox">
					<div className ="post-top">{topBar}</div>
					{titleGoesHere}
					{imagesGoesHere}
					{textGoeshere}
					<div className="tags">{post.tags}</div>
					<div className ="post-bottom">{botBar}</div>
				</div>
			</div>
		);
	}
}

export default Post;
