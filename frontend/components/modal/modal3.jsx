import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal3 } from '../../actions/modal_actions';
import ChoosePostModal from './choose_post_modal';
import PopOutPicture from './pop_out_picture';

class Modal3 extends React.Component {
	constructor(props){
		super(props);
		this.transitionModals = this.transitionModals.bind(this);
	}

	transitionModals(){
		this.props.openModal('zoom-off-screen');
		this.props.closeModal3()
	}

	render() {
		const { modal3, closeModal3 } = this.props;
		
		if (!modal3) { //! checks if UI state is null
			return null;
		}

		// debugger

		let component;
		let background;
		let container;

		switch (modal3) {
			case 'choose-a-form':
				component = <ChoosePostModal />;
				background = 'choose-a-form-background';
				container = 'choose-a-form-container';
				break;
			default:
				return null;
		}
		
		return (		
				// <div className={background} onClick={this.props.closeModal2}>
				<div className={background} onClick={this.transitionModals}>
					<div className={container} onClick={(e) => e.stopPropagation()}>
						{component}
					</div>
				</div>

		);
	}
}

const msp = (state) => {
	return {
		modal3: state.ui.modal3
	};
};

const mdp = (dispatch) => {
	return {
		closeModal3: () => dispatch(closeModal3()),
		openModal: (modal)=>dispatch(openModal(modal))
	};
};

export default connect(msp, mdp)(Modal3);
