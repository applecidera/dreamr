export const fetchAllLikes = () => (
  $.ajax({
    url: '/api/likes',
    method: 'GET'
  })
)

export const likePost = (id) => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: {id}
  })
)

export const unlikePost = (id) => (
  $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data: {id}
  })
)