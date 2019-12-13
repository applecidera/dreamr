import React from 'react';

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		const { postType } = this.props;
		this.state = {
			postType: postType,
			title: '',
			text: '',
			contentUrl: '',
			tags: ''
		};
		this.ref = React.createRef();
	}

	// auto_grow(element) {
  //   element.style.height = "5px";
  //   element.style.height = (element.scrollHeight)+"px";
	// }

	render() {
    const {closeModal, currentUser} = this.props;
    

		let formBlock;
		switch (this.state.postType) {
			case 'textForm':
				formBlock = (
					<div className = "formData">
						<label htmlFor="input-title" />
						<input type="text" id="input-title" placeholder="Title" />
						<label htmlFor="input-body" />
						<textarea id="input-body" cols="30" rows="5" 
							placeholder="Your text here"
							// onInput={this.auto_grow(this.ref)}
							elastic
							></textarea>
						<label htmlFor="input-tags" />
						<input type="text" id="input-tags" placeholder="#tags" />
					</div>
				);
				break;
			case 'photoForm':
				formBlock = <div />;
				break;
			case 'quoteForm':
				formBlock = <div />;
				break;
			case 'audioForm':
				formBlock = <div />;
				break;
			case 'videoForm':
				formBlock = <div />;
				break;
		}

		return (
			<>
				<img className="avatar" />
				<div className="postbox">
					<div className="post-form-top-block">{currentUser.username}</div>
						{formBlock}
					<div className="post-form-bottom-block">
						<button onClick={closeModal}>Close</button>
						<button>Post</button>
					</div>
				</div>
			</>
		);
	}
}

export default PostForm;
