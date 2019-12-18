export const likePost = (postId) => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    postId: postId
  })
)

export const unlikePost = (likeId) => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: 'DELETE',
  })
)