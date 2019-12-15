import React from 'react';
import { Link } from 'react-router-dom';

class PostFormBar extends React.Component {
	render() {
        const {currentUser, postType} = this.props;
		return (
			<div className="post-form-bar-container">
				{/* <img className="post-avatar" src={window.avatar} /> */}
				<img className="post-avatar" src={currentUser.avatar} />
				<div className="post-form-bar">
					<div
						className="text-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('textForm')}
					>
						<button>Aa</button>
						<span>Text</span>
					</div>
					<div
						className="photo-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('imageForm')}
					>
						<button className="fas fa-camera-retro"></button>
						<span>Photo</span>
					</div>
					<div
						className="quote-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('quoteForm')}
					>
						<button className="fas fa-quote-left"></button>
						<span>Quote</span>
					</div>
					<div
						className="audio-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('audioForm')}
					>
						<button className="fas fa-headphones"></button>
						<span>Audio</span>
					</div>
					<div
						className="video-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('videoForm')}
					>
						<button className="fas fa-video"></button>
						<span>Video</span>
					</div>
				</div>
			</div>
		);
	}
}

export default PostFormBar;
