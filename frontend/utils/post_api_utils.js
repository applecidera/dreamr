export const fetchAllPosts = (filters) =>
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
		data: post,
		contentType: false,
		processData: false
	});

export const updatePost = (post) =>
	$.ajax({
		method: 'PATCH',
		url: `/api/posts/${post.id}`,
		data: { post }
	});

export const deletePost = (postId) => {
	return $.ajax({ method: 'DELETE', url: `/api/posts/${postId}` });
};
