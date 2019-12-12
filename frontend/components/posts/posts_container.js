import { connect } from 'react-redux';
import Post from './post';

const msp = (state) => ({
  post: state.post
});

const mdp = (dispatch) => ({});

export default connect(null, null)(Post);
