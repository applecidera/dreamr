import React from 'react';
import { Link } from 'react-router-dom';

class PostFormBar extends React.Component {
	render() {
        // debugger
		return (
			<div className="post-form-bar-container">
				<div className="post-avatar" />
				<div className="post-form-bar">
					<div
						className="text-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('textForm')}
					>
						Text
					</div>
					<div
						className="photo-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('photoForm')}
					>
						Photo
					</div>
					<div
						className="quote-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('quoteForm')}
					>
						Quote
					</div>
					<div
						className="audio-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('audioForm')}
					>
						Audio
					</div>
					<div
						className="video-box"
						id="post-form-button"
						onClick={()=>this.props.openModal('videoForm')}
					>
						Video
					</div>
				</div>
			</div>
		);
	}
}

export default PostFormBar;
