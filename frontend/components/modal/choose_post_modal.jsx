import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal2 } from '../../actions/modal_actions';

class ChoosePostModal extends React.Component {
	constructor(props) {
		super(props);
		this.transitionModal = this.transitionModal.bind(this);
	}

	transitionModal(modal){
		this.props.closeModal2();
		this.props.openModal(modal);
	}

	render() {
		const { modal2, closeModal2 } = this.props;

		if (!modal2) {
			return null;
		}

		return (
			<>
				<label htmlFor="text" className="choose-a-form-box">
					<button 
					onClick={()=>this.transitionModal("textForm")} 
					id="text"
					className="text-button">Aa</button>
					<span>Text</span>
				</label>
				<label htmlFor="photo" className="choose-a-form-box">
				<button 
					onClick={()=>this.transitionModal("imageForm")} 
					id="photo"
					className="photo-button fas fa-camera-retro"/>
					<span>Photo</span>
				</label>
				<label htmlFor="quote" className="choose-a-form-box">
				<button 
					onClick={()=>this.transitionModal("quoteForm")} 
					id="quote"
					className="quote-button fas fa-quote-left"/>
					<span>Quote</span>
				</label>
				<label htmlFor="audio" className="choose-a-form-box">
				<button 
					onClick={()=>this.transitionModal("audioForm")} 
					id="audio"
					className="audio-button fas fa-headphones"/>
					<span>Audio</span>
				</label>
				<label htmlFor="video" className="choose-a-form-box">
				<button 
					onClick={()=>this.transitionModal("videoForm")} 
					id="video"
					className="video-button fas fa-video"/>
					<span>Video</span>
				</label>
			</>
		);
	}
}

const msp = (state) => {
	return {
		modal2: state.ui.modal2
	};
};

const mdp = (dispatch) => {
	return {
		closeModal2: () => dispatch(closeModal2()),
		openModal: (modal)=>dispatch(openModal(modal))
	};
};

export default connect(msp, mdp)(ChoosePostModal);
