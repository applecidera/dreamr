import { connect } from 'react-redux';
import Post from './post';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
// import { followPost, unfollowPost } from '../../actions/post_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

const msp = (state, ownProps) => {
  const authorId = ownProps.post.user_id;
  let liked;
  Object.values(state.entities.likes).forEach((like)=>{
    (like["post_id"] === ownProps.post.id) ? (liked = true) : (liked = false);
  })

  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    author: state.entities.users[authorId],
    liked: liked
    }
  };
const mdp = (dispatch) => ({
  fetchUser: (userId)=>dispatch(fetchUser(userId)),
  openModal: (modal)=>dispatch(openModal(modal)),
  likePost: (postId)=>dispatch(likePost(postId)),
  unlikePost: (postId)=>dispatch(unlikePost(postId)),
  // followUser: (userId)=>dispatch(followPost(userId)),
  // unfollowUser: (userId)=>dispatch(unfollowPost(userId))
});

export default connect(msp, mdp)(Post);
