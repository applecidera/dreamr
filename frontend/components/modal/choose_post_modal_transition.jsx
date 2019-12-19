import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal, closeModal2 } from '../../actions/modal_actions';

class ChoosePostModal extends React.Component {
	constructor(props) {
		super(props);
		this.transitionModal = this.transitionModal.bind(this);
		
	}

	componentDidMount(){
		setTimeout(()=>this.props.closeModal(), 500);
	}

	transitionModal(modal){
		this.props.closeModal2();
		this.props.openModal(modal);
	}

	render() {
		const { modal, closeModal2 } = this.props;

		if (!modal) {
			return null;
		}
		// debugger

		return (
			<>
				<label htmlFor="text" className="choose-a-form-box">
					<button 
					id="text"
					className="text-button-animated">Aa</button>
					<span className="animated-text-flying1">Text</span>
				</label>
				<label htmlFor="photo" className="choose-a-form-box">
				<button 
					id="photo"
					className="photo-button-animated fas fa-camera-retro"/>
					<span className="animated-text-flying2">Photo</span>
				</label>
				<label htmlFor="quote" className="choose-a-form-box">
				<button 
					id="quote"
					className="quote-button-animated fas fa-quote-left"/>
					<span className="animated-text-flying3">Quote</span>
				</label>
				<label htmlFor="audio" className="choose-a-form-box">
				<button 
					id="audio"
					className="audio-button-animated fas fa-headphones"/>
					<span className="animated-text-flying2">Audio</span>
				</label>
				<label htmlFor="video" className="choose-a-form-box">
				<button 
					id="video"
					className="video-button-animated fas fa-video"/>
					<span className="animated-text-flying1">Video</span>
				</label>
			</>
		);
	}
}

const msp = (state) => {
	return {
		modal: state.ui.modal
	};
};

const mdp = (dispatch) => {
	return {
		closeModal2: () => dispatch(closeModal2()),
		openModal: (modal)=>dispatch(openModal(modal)),
		closeModal: ()=>dispatch(closeModal())
	};
};

export default connect(msp, mdp)(ChoosePostModal);
