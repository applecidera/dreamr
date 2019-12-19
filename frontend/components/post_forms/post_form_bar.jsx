import React from 'react';
import { Link } from 'react-router-dom';

class PostFormBar extends React.Component {
	render() {
		const {currentUser, postType} = this.props;
		let avatar = (currentUser.avatar === "cloud") ? window.avatar : currentUser.avatar;
		return (			// TODO add custom routes to create new posts
			<div className="post-form-bar-container">
				<img className="post-avatar" src={avatar} />
				<div className="post-form-bar">
					<Link style={{ textDecoration: 'none' }} 
						to="/new/text"
						className="text-box"
						id="post-form-button" >
						<button>Aa</button>
						<span>Text</span>
					</Link>
					<div className="gray-gradient-border"></div>
					<Link style={{ textDecoration: 'none' }} 
						to="/new/image"
						className="photo-box"
						id="post-form-button" >
						<button className="fas fa-camera-retro"></button>
						<span>Photo</span>
					</Link>
					<div className="gray-gradient-border"></div>
					<Link style={{ textDecoration: 'none' }} 
						to="/new/quote"
						className="quote-box"
						id="post-form-button" >
						<button className="fas fa-quote-left"></button>
						<span>Quote</span>
					</Link>
					<div className="gray-gradient-border"></div>
					<Link style={{ textDecoration: 'none' }} 
						to="/new/audio"
						className="audio-box"
						id="post-form-button" >
						<button className="fas fa-headphones"></button>
						<span>Audio</span>
					</Link>
					<div className="gray-gradient-border"></div>
					<Link style={{ textDecoration: 'none' }} 
						to="/new/video"
						className="video-box"
						id="post-form-button" >
						<button className="fas fa-video"></button>
						<span>Video</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default PostFormBar;
