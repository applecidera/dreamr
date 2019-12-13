import { connect } from 'react-redux';
import Post from './post';

const msp = (state) => ({
  currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({});

export default connect(msp, null)(Post);
