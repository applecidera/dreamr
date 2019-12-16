import { connect } from 'react-redux';
import Post from './post';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({
  openModal: (modal)=>dispatch(openModal(modal))
});

export default connect(msp, mdp)(Post);
