import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../post_forms/post_form_container';

class Modal extends React.Component {
	render() {
    const {modal, closeModal} = this.props;

		if (!modal) {
			return null;
		}

    let component;
    // debugger
		switch (modal) {
			case 'textForm':
				component = <PostFormContainer postType={modal}/>;
        break;
      case 'photoForm':
				component = <PostFormContainer postType={modal}/>;
        break;
      case 'quoteForm':
				component = <PostFormContainer postType={modal}/>;
        break;
      case 'audioForm':
				component = <PostFormContainer postType={modal}/>;
        break;
      case 'videoForm':
				component = <PostFormContainer postType={modal}/>;
				break;
			default:
				return null;
		}

		return (
			<div>
				<div className="modal-background">
          <div></div>
					<div className="post-form-container" onClick={(e) => e.stopPropagation()}>
						{component}
					</div>
				</div>
			</div>
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
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(msp, mdp)(Modal);
