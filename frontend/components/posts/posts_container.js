import { connect } from 'react-redux';
import Post from './post';

const msp = (state) => ({
  post: state.post
});

const msp = (dispatch) => ({});

export default connect(msp, mdp)(Post);
