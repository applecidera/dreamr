import { connect } from 'react-redux';
import Post from './post';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

const msp = (state, ownProps) => {
  const authorId = ownProps.post.user_id;
  let liked = false;
  let followed = false;
  Object.values(state.entities.likes).forEach((like)=>{
    if (like["post_id"] === ownProps.post.id) (liked = true);
  })
  Object.values(state.entities.follows).forEach((follow)=>{
    if (follow["user_id"] === ownProps.post.authorId) (followed = true) ;
  })

  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    author: state.entities.users[authorId],
    liked: liked,
    followed: followed
    }
  };

const mdp = (dispatch) => ({
  fetchUser: (userId)=>dispatch(fetchUser(userId)),
  openModal: (modal)=>dispatch(openModal(modal)),
  likePost: (postId)=>dispatch(likePost(postId)),
  unlikePost: (postId)=>dispatch(unlikePost(postId)),
  followUser: (userId)=>dispatch(followUser(userId)),
  unfollowUser: (userId)=>dispatch(unfollowUser(userId))
});

export default connect(msp, mdp)(Post);
