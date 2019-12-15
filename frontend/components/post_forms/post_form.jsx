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
			imageFile: null,
			imageUrl: null,
			tags: '',
			errors: null
		};
		this.ref = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleInput(inputType){
		let uploadedImage = event.currentTarget.value;
		
		return e=>{
			this.setState({
				[inputType]: e.currentTarget.value
			})
		}
	}

	handleUpload(e){
		// REVIEW filesize must be under 5mb cuz im too poor to afford AWS
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();

		if (file.size > 5000000){
			this.setState({errors: "Filesize must be under 5 Mb!"});
			console.log("Filesize must be under 5 Mb!");
		} else {
			fileReader.onloadend = ()=> {	// loads fileReader while setting state
				this.setState({
					imageFile: file,
					imageUrl: fileReader.result
				})
			}
		}
		if (file) fileReader.readAsDataURL(file);	// renders image if file exists
	}
	

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('post[title]', this.state.title);
		if (this.state.imageFile) {
			formData.append('post[image]', this.state.imageFile);
		}
		formData.append('post[text]', this.state.text);
		formData.append('post[tags]', this.state.tags);

		const closeModalCB = ()=>this.props.closeModal();
		this.props
			.createPost(formData)
			.then(
				(closeModalCB),
				(response)=>console.log(response.responseJSON)
				);
			// .then(() => this.props.history.push('/dashboard'));
	}




	render() {
		
		const {closeModal, currentUser, postType} = this.props;
		const {title, content_url, text, imageFile}=this.state;
		
		//TODO add more here

		// let titleGoesHere=null;
		// if (postType === "textForm" || postType === "quoteForm" ){
			const titleGoesHere=(
			<input 
				type="text" 
				placeholder="Title"
				className="input-title"
				onChange={this.handleInput("title")} />);
		// }
		// let imageUploadBox=null;
		// if (postType === "imageForm"){
			// REVIEW Original Input Click
			// https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
			const imageUploadBox=(
				<input
				type="file"
				className="image-upload-box"
				onChange={this.handleUpload}
				/>
			)
		// }
			const imagePreview = this.state.imageUrl ? 	// if
			(<img className="image-preview" src={this.state.imageUrl}></img>) :	// then
			null;										// else

			const textGoesHere=(
				<textarea cols="30" rows="5" 
				placeholder="Your text here"
				className="input-body"
				elastic="true"
				onChange={this.handleInput("text")}></textarea>
			)

			const tagsGoesHere=(
				<input 
				type="text" 
				placeholder="#tags"
				className="input-tags"
				onChange={this.handleInput("tags")}/>
			)



		let formBlock;
		switch (this.state.postType) {
			case 'textForm':
				formBlock = (
					<div className = "formData">
						{titleGoesHere}
						{textGoesHere}
						{tagsGoesHere}
					</div>
				);
				break;
			case 'imageForm':
				formBlock = (
					<div className = "formData">
						{imagePreview}
						{imageUploadBox}
						{textGoesHere}
						{tagsGoesHere}
					</div>
				);
				break;
			case 'quoteForm':
				formBlock = (
					<div className = "formData">
						
					</div>
				);
				break;
			case 'audioForm':
				formBlock = (
					<div className = "formData">
						
					</div>
				);
				break;
			case 'videoForm':
				formBlock = (
					<div className = "formData">
						
					</div>
				);
				break;
		}
		//TODO add more here
		let disabled=true;
		if (content_url!="" || title!="" || text!="" || imageFile!="") disabled=false;

		return (
			<>
				<img className="avatar" />
				<div className="post-form-box postbox">
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
