
export const fetchAllFollows = () => (
  $.ajax({
    url: '/api/follows',
    method: "GET"
  })
)

export const receiveFollow = () => (
  $.ajax({
    url: '/api/follows',
    method: "GET"
  })
)

export const followUser = (id) => (
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: {id}
  })
)

export const unfollowUser = (id) => (
  $.ajax({
    url: `/api/follows/${id}`,
    method: 'DELETE',
    data: {id}
  })
)