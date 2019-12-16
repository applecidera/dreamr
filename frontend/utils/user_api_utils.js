// export const fetchAllUsers = (filters) =>
// 	$.ajax({
// 		method: 'GET',
// 		url: '/api/users'
// 	});

export const fetchSingleUser = (userId) =>
	$.ajax({
		method: 'GET',
		url: `/api/users/${userId}`
	});

// export const updateUser = (user) =>
// 	$.ajax({
// 		method: 'PATCH',
// 		url: `/api/users/${user.id}`,
// 		data: { user }
// 	});
