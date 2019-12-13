import * as PostApiUtils from '../utils/post_api_utils';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receiveAllPosts = (posts) => ({
	type: RECEIVE_ALL_POSTS,
	posts
});

export const receivePost = (post) => ({
	type: RECEIVE_POST,
	post
});

export const removePost = (post) => ({
	type: REMOVE_POST,
	postId: post.id
});

export const fetchAllPosts = () => (dispatch) =>
	PostApiUtils.fetchAllPosts().then((posts) =>
		dispatch(receiveAllPosts(posts))
		         
	);

export const fetchSinglePost = (postId) => (dispatch) =>
	PostApiUtils.fetchSinglePost(postId).then((post) =>
		dispatch(receievePost(post))
	);

export const createPost = (post) => (dispatch) =>
	PostApiUtils.createPost(post).then((post) => dispatch(receivePost(post)));

export const updatePost = (post) => (dispatch) =>
	PostApiUtils.updatePost(post).then((post) => dispatch(receivePost(post)));

export const deletePost = (postId) => (dispatch) =>
	PostApiUtils.deletePost(postId).then((post) => dispatch(removePost(post)));
