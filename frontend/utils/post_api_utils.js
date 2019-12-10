export const fetchAllPosts = () =>
	$.ajax({
		method: 'GET',
		url: '/api/posts'
	});

export const fetchSinglePost = (postId) =>
	$.ajax({
		method: 'GET',
		url: `/api/posts/${postId}`
	});

export const createPost = (post) =>
	$.ajax({
		method: 'POST',
		url: `/api/posts`,
		data: { post }
	});

export const updatePost = (post) =>
	$.ajax({
		method: 'PATCH',
		url: `/api/posts/${post.id}`,
		data: { post }
	});

export const deletePost = (postId) =>
	$.ajax({
		method: 'DELETE',
		url: `/api/posts/${postId}`
	});
