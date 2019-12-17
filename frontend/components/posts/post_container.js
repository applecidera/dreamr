import { connect } from 'react-redux';
import Post from './post';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const authorId = ownProps.post.user_id;
  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    author: state.entities.users[authorId]
    }
  };
const mdp = (dispatch) => ({
  fetchUser: (userId)=>dispatch(fetchUser(userId))
});

export default connect(msp, mdp)(Post);
