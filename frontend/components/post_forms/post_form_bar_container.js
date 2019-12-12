import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostFormBar from './post_form_bar';

const msp = (state) => ({});

const mdp = (dispatch) => ({
	openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mdp)(PostFormBar);
