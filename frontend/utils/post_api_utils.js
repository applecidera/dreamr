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

export const deleteAttachment = (id)=>
	$.ajax({
		method: "DELETE",
		url: `/api/posts/${id}/delete_attachment`
	})
	

export const updatePost = (post) =>
	$.ajax({
		method: 'PATCH',
		url: `/api/posts/${post.id}`,
		data: post,
		id: post.id,
		contentType: false,
		processData: false
	});

export const deletePost = (postId) => {
	return $.ajax({ 
		method: 'DELETE', 
		url: `/api/posts/${postId}` });
};
