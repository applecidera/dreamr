import React from 'react';

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		const { postType, currentUser } = this.props;
		this.state = {
			user_id: currentUser.id,
			postType: postType,
			title: '',
			text: '',
			content_url: '',
			tags: ''
		};
		this.ref = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){

	}
	handleInput(inputType){
		return e=>{
			this.setState({
				[inputType]: e.currentTarget.value
			})
		}
	}
	

	handleSubmit(e) {
		// debugger
		e.preventDefault();
		const closeModalCB = ()=>this.props.closeModal();
		this.props
			.createPost(this.state)
			.then(closeModalCB);
			// .then(() => this.props.history.push('/dashboard'));

	}


	render() {
		const {closeModal, currentUser} = this.props;
		const {title, content_url, text}=this.state;
		//TODO add more here
    

		let formBlock;
		switch (this.state.postType) {
			case 'textForm':
				formBlock = (
					<div className = "formData">
						<label htmlFor="input-title" />
						<input 
							type="text" 
							id="input-title" 
							placeholder="Title"
							onChange={this.handleInput("title")} />
						<label htmlFor="input-body" />
						<textarea id="input-body" cols="30" rows="5" 
							placeholder="Your text here"
							elastic="true"
							onChange={this.handleInput("text")}></textarea>
						<label htmlFor="input-tags" />
						<input 
							type="text" 
							id="input-tags" 
							placeholder="#tags"
							onChange={this.handleInput("tags")} />
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
		//TODO add more here
		let disabled=true;
		if (content_url!="" || title!="" || text!="") disabled=false;

		return (
			<>
				<img className="avatar" />
				<div className="postbox">
					<div className="post-form-top-block">{currentUser.username}</div>
						{formBlock}
					<div className="post-form-bottom-block">
						<button className="post-close" onClick={closeModal}>Close</button>
						<button disabled={disabled} className="post-create-post" onClick={this.handleSubmit}>
							<span>Post</span>
							<div className="fas fa-chevron-down"></div>
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default PostForm;
