import { connect } from 'react-redux';
import Post from './post';
import { fetchUser } from '../../actions/user_actions';
import { openModal2 } from '../../actions/modal_actions';
import { likePost, unlikePost, followPost, unfollowPost } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  const authorId = ownProps.post.user_id;
  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    author: state.entities.users[authorId]
    }
  };
const mdp = (dispatch) => ({
  fetchUser: (userId)=>dispatch(fetchUser(userId)),
  openModal2: (modal)=>dispatch(openModal2(modal)),
  likePost: (postId)=>dispatch(likePost(postId)),
  unlikePost: (postId)=>dispatch(unlikePost(postId)),
  followPost: (userId)=>dispatch(followPost(userId)),
  unfollowPost: (userId)=>dispatch(unfollowPost(userId))
});

export default connect(msp, mdp)(Post);
