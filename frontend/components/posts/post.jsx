import React from 'react';
import PostDropdown from './post_dropdown';
import FloatingHeart from './floating_heart';
import FloatingBrokenHeart from './floating_broken_heart';

class Post extends React.Component {

	constructor(props){
		super(props);
		this.state=({
			author: null || this.props.author,
			liked: false || this.props.liked,
			followed: false || this.props.followed,
			opacity: false
		})
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleFollow = this.toggleFollow.bind(this);
	}

	componentDidMount(){
		if (!this.props.author)
			this.props.fetchUser(this.props.authorId);
	}

	componentDidUpdate(prevState){
		if (this.props.author && !prevState.author){
			this.setState({author: this.props.author})
		}

		if (this.props.liked != prevState.liked){
			this.setState({liked: this.props.liked});
		}

		if (this.props.followed != prevState.followed){
			this.setState({followed: this.props.followed});
		}
	}

	toggleLike(){
		const post = this.props.post;
		
		if (this.state.liked){
			this.props.unlikePost(post.id);
			} else {
			this.props.likePost(post.id);
		}
	}

	toggleFollow(){
		const post = this.props.post;
		
		if (this.state.followed){
			this.props.unfollowUser(post.authorId);
			} else {
			this.props.followUser(post.authorId);
		}
	}

	render() {

		if (!this.state.opacity) window.setTimeout(this.setState({opacity: true}), 3000)

		const {currentUser, post, authorId} = this.props;
		let {author} = this.state;

		if (!author) author="";
		
		let topBar;
		let botBar;
		let likedPost;
		let floatingHeart;
		let followUser;
		
		if (this.state.liked) {
			likedPost = "like fas fa-heart liked-heart-button";
			floatingHeart = (<FloatingHeart visible={this.state.opacity}/>);
		} else { // user liked the post
			likedPost ="like far fa-heart not-like-heart-button";
			floatingHeart = (<FloatingBrokenHeart visible={this.state.opacity}/>)
		} ; // user has not liked the post

		if (this.state.followed) {
			followUser = (<div onClick={this.toggleFollow} className="unfollow-button follow-toggle-button">Unfollow</div>)
		} else {
			followUser = (<div onClick={this.toggleFollow} className="follow-button follow-toggle-button">Follow</div>)
		};
		
		if (authorId===currentUser.id){ //! post is current user's
			topBar = (<span onClick={()=>this.props.openModal("user-peek")} id={this.props.authorId}>{author.username}</span>);
			botBar = (<>
								<div></div>
								<div className="post-bottom-right">
									<div className="post-icons">
										<button className="reply far fa-comment"></button>
										<button className="reblog fas fa-retweet"></button>
										<PostDropdown postId={post.id}></PostDropdown>
									</div>
								</div>
								</>);
		} else {
			topBar = (<><span onClick={()=>this.props.openModal("user-peek")} id={this.props.authorId}>{author.username}</span>{followUser}</>); // !someone else's post
			botBar = (<>
								<div className="post-bottom-left">
									<span>Karma</span>
								</div>
								<div className="post-bottom-right">
									<div className="post-icons">
										<button className="reply far fa-comment"></button>
										<button className="reblog fas fa-retweet"></button>
										<button 
										className={likedPost}
										onClick={this.toggleLike}></button>
										{floatingHeart}
									</div>
								</div>
								</>);
		}
		
		
		let isaQuote = (post.post_type==="quote") ? ('\"') : source=null;
		let source = (post.post_type==="quote") ? ('\u2014') : isaQuote = null;
		
		let titleGoesHere=null;
		if (post.title!="")
			titleGoesHere = (<div className="title">{isaQuote}{post.title}{isaQuote}</div>);

		let imagesGoesHere = null;
		if (post.imageUrls && post.post_type==="image")
			imagesGoesHere = post.imageUrls.map((imageUrl, idx)=>{
				return (<img 
									key={idx} 
									className="image" 
									src={imageUrl}
									onClick={()=>this.props.openModal("pop-out")}>
									</img>)
			})
		
		let audioGoesHere = null;
		if (post.imageUrls && post.post_type==="audio")
			audioGoesHere = post.imageUrls.map((imageUrl, idx)=>{
				return (<div key={idx} className="audio">&#x1d11e;<audio 	
						src={imageUrl}
						controls>
						</audio>&#9835;</div>)
			})

		let videoGoesHere = null;
		if (post.imageUrls && post.post_type==="video")
			videoGoesHere = post.imageUrls.map((imageUrl, idx)=>{
				return (<div key={idx} ><video 	
						src={imageUrl}
						className="image" 
						controls />
						</div>)
			})

		let textGoesHere = null;
		if (post.text!="")
			textGoesHere=(<div className="text">{source}{post.text}</div>);
		
		let tagsGoesHere = null;
		if (post.tags!="")
			tagsGoesHere=(<div className="tags">{post.tags}</div>);

		let avatar = window.avatar;
		if (author && author.avatar != "cloud") (avatar = author.avatar)

		// let avatarClickable = (authorId!=currentUser.id) ? (()=>this.props.openModal("user-peek")) : ( ()=>{} );

		return (
			<div key={post.id} className="post-container">
				<img className="avatar" 
				src={avatar}
				onClick={()=>this.props.openModal("user-peek")} 
				id={this.props.authorId}></img>
				<div className="postbox">
					<div className ="post-top">{topBar}</div>
					{titleGoesHere}
					{imagesGoesHere}
					{audioGoesHere}
					{videoGoesHere}
					{textGoesHere}
					{tagsGoesHere}
					<div className ="post-bottom">{botBar}</div>
				</div>
			</div>
		);
	}
}

export default Post;
