
export const likeChirp = id => dispatch => postLikeToChirp(id)
  .then(chirp => dispatch(receiveSingleChirp(chirp)));

export const unLikeChirp = id => dispatch => deleteLikeFromChirp(id)
  .then(chirp => dispatch(receiveSingleChirp(chirp)));