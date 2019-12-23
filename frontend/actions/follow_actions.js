export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS"
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"
import * as FollowApiUtils from '../utils/follow_api_utils';

export const receiveAllFollows = (follows) => ({
	type: RECEIVE_ALL_FOLLOWS,
	follows
});

export const receiveFollow = (follow) => ({
	type: RECEIVE_FOLLOW,
	follow
});

export const removeFollow = (follow) => ({
	type: REMOVE_FOLLOW,
	follow
});

export const fetchAllFollows = () => dispatch =>
  FolllowApiUtils.fetchAllFollows()
  .then(follows => dispatch(receiveAllFollows(follows)))

export const followUser = (userId) => (dispatch) => 
	FollowApiUtils.followUser(userId)
  	.then(follow => dispatch(receiveFollow(follow)));

export const unfollowUser = (userId) => (dispatch) => 
	FollowApiUtils.unfollowUser(userId)
	.then(follow => dispatch(removeFollow(follow)));