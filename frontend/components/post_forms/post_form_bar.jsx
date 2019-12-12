import React from 'react'

class PostFormBar extends React.Component{
    render() {
        return (
            <div className = "post-form-bar-container">
                <div className="avatar"></div>
                <div className = "post-form-bar">
                    <div className="text-box" id="post-form-button">Text</div>
                    <div className="photo-box" id="post-form-button">Photo</div>
                    <div className="quote-box" id="post-form-button">Quote</div>
                    <div className="audio-box" id="post-form-button">Audio</div>
                    <div className="video-box" id="post-form-button">Video</div>
                </div>
            </div>
        )
    }
}

export default PostFormBar;